const express = require('express')

const router = express.Router()

const user_routes = require("./user_routes")


router.get('/',(req,res) => {
    res.send("this is index.page")
});

router.use('/users', user_routes);


module.exports = router