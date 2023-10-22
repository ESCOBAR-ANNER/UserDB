const { Router } = require("express");
const router = Router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => res.send("Hello world"));

//metodo para registrarse
router.post("/register", async (req, res) => {
console.log("Probbbb/")
    const { email, password } = req.body;
  const newUser = new User({ email, password });
    await newUser.save();
  const token = jwt.sign({_id: newUser._id}, "secretKey");
  return res.status(200).json({token});
});


//metodo para loguearse
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).send("The email does not existe");
  if (user.password !== password)
    return res.status(401).send("Wrong password ");
  const token = jwt.sign({ _id: user._id }, "secretKey");
  return res.status(200).json({ token });
});




module.exports = router;
