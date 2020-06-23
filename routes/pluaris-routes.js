const express = require("express");

const pluarisControllers = require("../controllers/pluaris-controllers");

const router = express.Router();

router.get("/", pluarisControllers.sayHi);
router.post("/", (req, res) => {
  console.log("/POST ROUTE HIT");
  console.log(req);
});

// router.post("/signup", usersControllers.signup);
//
// router.post("/login", usersControllers.login);

module.exports = router;
