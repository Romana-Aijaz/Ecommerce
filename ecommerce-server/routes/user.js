const router = require('express').Router();
const User = require("../model/User")
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require("./verifyToken");

//UPDATE USER
router.put("/:userId", verifyToken, async (req, res) => {
    if (req.body.password) {
        req.body.password= CryptoJs.AES.encrypt(req.body.password, 'roomiK')
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.userId, {
        $set: req.body
      }, {new: true});
      res.status(200).json(updatedUser)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//DELETE USER
router.delete("/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId)
        res.status(200).json("User has been deleted.")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET USER
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new
    try {
        const users = query ? await User.find().sort({_id: -1}).limit(5) : await User.find()
        console.log(users)
        res.status(200).json(users)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET USER STATS
router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    try {
       const date = new Date();
       const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
      const data = await User.aggregate([
        {$match: {createdAt: {$gte: lastYear}}},
        {$project: {month: {$month: "$createdAt"}}}, 
        {$group: {_id: "$month", total: {$sum: 1}}}
      ]);
      res.status(200).json(data)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router