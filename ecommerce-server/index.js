const mongoose = require('mongoose');
const express = require('express');
const databaseConnection = require('./model/database');
const userRouter = require('./routes/user')
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")
const cartRouter = require("./routes/cart")
const orderRouter = require("./routes/order");
const bodyParser = require("body-parser");
const paymentRouter = require("./routes/stripe")
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);
app.use("/orders", orderRouter);
app.use("/auth", authRouter);
app.use("/payment", paymentRouter)
app.get("/", (req, res) => {
    res.json("ecommerce")
})
app.listen(8000, () => {
    console.log("Server is listening on port " +8000)
})