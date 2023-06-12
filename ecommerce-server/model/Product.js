const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    title: {type: String, required: true, unique: true},
    desc: {type: String, required: true},
    img: {type: String, required: true},
    categories: {type: Array, default: ["Co-Ords"]},
    size: {type: Array, default: ["XL","S","L", "M", "XS"]},
    color: {type: Array, default:["Orange", "Black", "Brown"]},
    price: {type: Number, required: true},
    inStock: {type: Boolean, default: true}
},
{timestamps: true})
module.exports = mongoose.model("Product", ProductSchema)