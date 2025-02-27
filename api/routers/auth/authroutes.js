const express = require("express");
const { RegisterUser } = require("../../controller/auth/authcontroller");
const router = express.Router();

router.post("/register", RegisterUser);

module.exports = router;
