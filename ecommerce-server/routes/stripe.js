const router = require('express').Router();
const stripe = require('stripe')('sk_test_51L5ah3HGD1qyTXcMRvKuaD7FaPHwyrVIZ2XzHDWArriurjOTqT2w90BdxlLb6OPjT2GCaj16soe0RpQb5kei5Fcr00Ux7bfDl4')

router.post("/", (req, res) => {
    console.log(req.body)
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr)
        }
        else {
            res.status(200).json(stripeRes)
        }
    })
})

module.exports = router