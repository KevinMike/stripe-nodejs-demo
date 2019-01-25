const stripe = require("stripe")('sk_test_19xejIcWmclPa6wWuXlqPnXi');
const express = require('express');
const router = express.Router();

router.post("/charge", function(req, res){
    let amount = 5*100;
    stripe.customers.create({
        email: req.body.stripeEmail,
        source: req.body.stripeToken
    })
    .then(customer =>
        stripe.charges.create({
            amount,
            description: 'Virtual Observer Anual License',
            source: 'tok_mastercard_prepaid',
            currency: "usd",
            // customer: customer.id
        }))
    .then(charge => res.json(charge))
    .catch(err => res.send(err))
});

router.get("/balance",function(req,res){
    stripe.balance.retrieve()
        .then(balance=>res.json(balance))
        .catch(err=>res.send(err))
});

router.post("/customer",function(){

});

router.post("/subcription",function(){

});

module.exports = router;