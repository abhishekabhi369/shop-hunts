const express=require('express')
const usersignup = require('../Controller/usersignup')
const check = require('../Controller/userlogin')
const protect = require('../middleware/token')
const addStore = require('../Controller/Store/addStore')
const addProducts = require('../Controller/Product/addProduct')
const getitemsname = require('../Controller/Product/searchproducts')
const middleware=[protect]
const  router=express.Router()

router.route('/signup').post(usersignup)
router.route('/login').post(check)
router.route('/addstore').post(addStore)
router.route('/addproducts').post(addProducts)
router.route('/products/:Name').get(getitemsname)

module.exports=router