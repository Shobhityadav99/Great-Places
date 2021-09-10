const express = require('express');

const placeControllers = require('../controllers/place-controller');
const router = express.Router();

router.get('/:pid',placeControllers.getplaceById);

router.get('/users/:uid',placeControllers.getplaceByuserId);

router.post('/',placeControllers.createPlace);


module.exports = router;