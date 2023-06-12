const mongoose = require('mongoose')
const connection = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
try {
    mongoose.connect('mongodb+srv://roomi_ak:zR2vgBEAlIxj1A0k@cluster0.5w4jy00.mongodb.net/ecommerce?retryWrites=true&w=majority',
    connection)
   console.log("Database connected successfully!")
}
catch (err) {
    console.log(err)
}