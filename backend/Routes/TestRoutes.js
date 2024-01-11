const express=require('express')
const usersignup = require('../Controller/usersignup')
const check = require('../Controller/userlogin')
const  router=express.Router()
router.route('/signup').post(usersignup)
router.route('/login').get(check)
module.exports=router