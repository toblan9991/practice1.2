const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyUser");
// import the controller, make sure it is exported
const {
  getEmployee,
  onboardEmployee,
  offboardEmployee,
  editEmployee,
} = require("../controllers/employeeController");

// GET: /employees
router.get("/companies/:cid/employees", getEmployee);
// GET: /employees/:id
router.get("/companies/:cid/employees/:id", getEmployee);
// POST: /employees
router.post("/companies/:cid/employees", onboardEmployee);
//
// PUT: /employees/:id
router.post("/companies/:cid/employees/:id", offboardEmployee);

// PUT: /employees/:id
router.put("/companies/:cid/employees/:id", editEmployee);

// Export the router
module.exports = router;
