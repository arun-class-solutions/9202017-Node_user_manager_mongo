const express = require("express");
const router = express.Router();

router.use("/users", require("./resources/users"));

module.exports = router;
