const express = require("express");

const pluarisControllers = require("../controllers/pluaris-controllers");

const router = express.Router();

router.get("/", pluarisControllers.sayHi);

// router.post("/signup", usersControllers.signup);
//
// router.post("/login", usersControllers.login);

module.exports = router;
