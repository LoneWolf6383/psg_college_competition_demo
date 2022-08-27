const router = require("express").Router();
const {User} = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
    location:req.body.location
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN

router.post("/login", async (req, res) => {
  try {
    console.log(await User.find())
    const user = await User.findOne({ username: req.body.username });
    if (!user)
      return res.status(401).json("User Not found!");

    // const hashedPassword = CryptoJS.AES.decrypt(
    //   user.password,
    //   process.env.PASS_SEC
    // );
    // const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    // if (OriginalPassword !== req.body.password)
    if (user.password != req.body.password)
      return  res.status(401).json("Wrong credentials!");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      'aalsdkfjs',
      {expiresIn:"3d"}
    );

    const { password, ...others } = user._doc;
      
    return res.status(200).json({...others, accessToken});
  } catch (err) {
    console.log(err)
    return res.status(500).json(err);
  }
});

module.exports = router;
