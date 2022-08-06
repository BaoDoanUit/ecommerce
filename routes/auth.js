const express = require("express");
const router = express.Router();

const {
  signup,
  SayHi,
  signin,
  signout,
  requireSignin,
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator/index");
//router

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get("/hello", (req, res) => {
  res.status(200).send("hello there");
});

router.get("/", requireSignin, SayHi);
module.exports = router;
