const router = require('express').Router();
const User = require("../model/User")
const path = require('path')
const CryptoJs = require('crypto-js')
const jwt = require('jsonwebtoken')
const {verifyToken, verifyTokenAndAuthorization} = require("./verifyToken");

router.get("/", async(req, res) => {
    res.sendFile(path.join(__dirname, "./user.html"))
})
//REGISTER
router.post("/register", async (req, res) => {
    console.log(req.body)
    try{
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJs.AES.encrypt(req.body.password, 'roomiK')
    })
    const savedUser = await newUser.save();
    console.log(savedUser)
    res.status(200).json(savedUser)
}
catch (err) {
    res.status(500).json(err)
}
})

//LOGIN
router.post("/login", async (req, res) => {
    console.log(req.body)
    try{
    const user = await User.findOne({username: req.body.username})
    !user && res.status(401).json("Wrong credentials!")
    const hashedPassword = CryptoJs.AES.decrypt(user.password, 'roomiK')
    const passwordString = hashedPassword.toString(CryptoJs.enc.Utf8)
    passwordString !== req.body.password && res.status(401).json("Wrong credentials!")
    const accessToken = jwt.sign({
        id: user._id, isAdmin: user.isAdmin
    }, 'ecommerce12', {expiresIn: '7d'})
    const {password, ...others} = user._doc;
    res.status(200).json({...others, accessToken})
}   
catch (err) {
    res.status(500).json(err)
}
})


module.exports = router