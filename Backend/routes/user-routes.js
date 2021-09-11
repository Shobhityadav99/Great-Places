const express = require('express');

const userControllers = require('../controllers/user-controller');
const router = express.Router();
const { check} = require('express-validator');

router.get('/',userControllers.getUsers);

router.post('/signup',[
    check('name').notEmpty(),
    check('email').normalizeEmail().isEmail(),
    check('password').isLength({min: 6})
],userControllers.signup);

router.post('/login',userControllers.login);

module.exports = router;