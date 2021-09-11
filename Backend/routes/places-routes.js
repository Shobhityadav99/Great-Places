const express = require('express');
const { check } = require('express-validator');

const placeControllers = require('../controllers/place-controller');
const router = express.Router();

router.get('/:pid', placeControllers.getplaceById);

router.get('/users/:uid', placeControllers.getplacesByuserId);

router.post(
    '/',
    [
        check('title')
            .not()
            .isEmpty(),
        check('description')
            .isLength({ min: 5 }),
        check('address')
            .notEmpty()
    ], placeControllers.createPlace);

router.patch('/:pid', [
    check('title')
        .not()
        .isEmpty(),
    check('description')
        .isLength({ min: 5 }),
], placeControllers.updatePlaceById);

router.delete('/:pid', placeControllers.deletePlaceById);

module.exports = router;