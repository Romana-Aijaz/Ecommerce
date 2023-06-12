const router = require('express').Router();
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require("./verifyToken");
const Order = require("../model/Order")
const path = require('path');
const { createSecretKey } = require('crypto');

router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, './user.html'))
})

//CREATE
router.post("/createOrder", verifyToken, async(req, res) => {
    const newOrder = new Order(req.body)
    try {
      const savedOrder = await newOrder.save();
      res.status(200).json(savedOrder)
      }
      catch (err) {
          res.status(500).json(err)
      }
})

//UPDATE USER
router.put("/:orderId", verifyTokenAndAdmin, async (req, res) => {
    try {
      const updatedOrder = await Order.findByIdAndUpdate(req.params.cartId, {
        $set: req.body
      }, {new: true});
      res.status(200).json(updatedOrder)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//DELETE USER
router.delete("/:orderId", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.orderId)
        res.status(200).json("Order has been deleted.")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET USER ORDERS
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const orders = await Order.find({userId: req.params.userId})
        res.status(200).json(orders)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL 
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
     const orders = await Order.find();
     res.status(200).json(orders)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET MONTHLY INCOME
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1))
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth()-1))
   try {
     const income = await Order.aggregate([
        {$match: {createdAt: {$gte: previousMonth}}},
        {$project:{ month: {$month: '$createdAt'},
        sales: "$amount"}, 
        $group: {_id: "$month", total: {$sum: "$sales"}}
    }
     ])
     res.status(200).json(income)
   }
   catch (err) {
    res.status(500).json(err)}
})
module.exports = router