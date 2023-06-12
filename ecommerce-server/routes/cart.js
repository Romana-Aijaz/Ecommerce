const router = require('express').Router();
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require("./verifyToken");
const Cart = require("../model/Cart")
const path = require('path');
const { createSecretKey } = require('crypto');

router.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, './user.html'))
})

//CREATE
router.post("/createCart", verifyToken, async(req, res) => {
    const newCart = new Cart(req.body)
    try {
      const savedCart = await newCart.save();
      res.status(200).json(savedProduct)
      }
      catch (err) {
          res.status(500).json(err)
      }
})

//UPDATE USER
router.put("/:cartId", verifyTokenAndAuthorization, async (req, res) => {
    try {
      const updatedCart = await Cart.findByIdAndUpdate(req.params.cartId, {
        $set: req.body
      }, {new: true});
      res.status(200).json(updatedCart)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//DELETE USER
router.delete("/:cartId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.cartId)
        res.status(200).json("Cart has been deleted.")
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET PRODUCT
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({userId: req.params.userId})
        res.status(200).json(cart)
    }
    catch (err) {
        res.status(500).json(err)
    }
})

//GET ALL 
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try {
     const carts = await Cart.find();
     res.status(200).json(carts)
    }
    catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router