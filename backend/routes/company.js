const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/verifyUser");
// import the controller, make sure it is exported
const {
  getCompany,
  registerCompany,
} = require("../controllers/companyController");
// GET: /company
router.get("/companies", getCompany);
// GET: /company/:id
router.get("/companies/:id", getCompany);
// POST: /company
router.post("/companies", registerCompany);
// Export the router
module.exports = router;
