const express = require('express');

const { AirplaneController } = require('../../controllers')

const {AirplaneMiddlewares} = require('../../middlewares');

const router = express.Router();


// /api/vi/airplanes POST

router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

router.get('/', AirplaneController.getAirplanes);

module.exports = router;