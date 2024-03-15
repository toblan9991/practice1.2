const Employee = require("../models/Employee");

const getEmployee = (req, res) => {
  const employeeId = req.params.id;
  const companyId = req.params.cid;

  if (typeof employeeId == "undefined") {
    // console.log("companyID", companyId);

    Employee.find({ companyID: companyId })
      .exec()
      .then((results) => {
        res.status(201).json(results);
        // console.log("results", results);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  } else {
    Employee.findOne({ companyID: companyId, _id: employeeId })
      .exec()
      .then((results) => {
        if (results == null) {
          res.status(404).json(results);
        } else {
          res.status(200).json(results);
        }
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
};

const onboardEmployee = (req, res) => {
  req.body.companyID = req.params.cid;

  const newEmployee = new Employee(req.body);

  newEmployee
    .save()
    .then((results) => {
      res.status(201).json(results);
    })
    .catch((error) => {
      res.status(500).json(error);
    });
};

const offboardEmployee = async (req, res, next) => {
  // if (req.user.id !== req.params.cid) {
  //   return res.status(401).json("You can update only your employees");
  // }
  // const companyId = req.params.cid;

  // try {
  // if (req.body.password) {
  //   req.body.password = await bcryptjs.hash(req.body.password, 10);
  // }

  // const updatedEmployee = await Employee.findByIdAndUpdate(
  //   req.params.id,
  //   {
  //     $set: {
  //       status: "inactive",
  //     },
  //   },
  //   { new: true }
  // );

  // const { password, ...rest } = updatedEmployee._doc;
  //  res.status(200).json(updatedEmployee);
  // } catch (error) {
  //     next(error);
  //   }
  // };

  // offboardEmployee modified code
  const { offBoardingReason, lastEmploymentDay, lastWorkingDay } = req.body;
  const updatedEmployee = await Employee.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        status: "inactive",
        offBoardingReason,
        lastEmploymentDay,
        lastWorkingDay,
      },
    },
    { new: true }
  );

  res.status(200).json(updatedEmployee);
};

const editEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedEmployee);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getEmployee,
  onboardEmployee,
  offboardEmployee,
  editEmployee,
};
