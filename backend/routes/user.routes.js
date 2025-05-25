const express = require('express');
const router=express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.controllers');

router.post('/register',[
    body('email').isEmail().withMessage('invalid email'),
    body('password').isLength({min:6}).withMessage('password must be at least 6 characters long'),
    body('fullname.firstname').isLength({min:3}).withMessage('first name must be at least 3 characters long')
],
userController.registeruser
);


module.exports=router;