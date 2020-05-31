const express = require('express')

const router = express.Router()

const user_routes = require("./user_routes")


router.get('/',(req,res) => {
    res.render('page/index.ejs')
});

router.use('/users', user_routes);


module.exports = router