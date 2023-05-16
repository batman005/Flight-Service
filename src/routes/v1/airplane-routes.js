const express = require('express');

const { AirplaneController } = require('../../controllers')

const {AirplaneMiddlewares} = require('../../middlewares');

const router = express.Router();


// /api/vi/airplanes POST

router.post('/', 
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane);

// /api/v1/airplanes GET    
router.get('/', AirplaneController.getAirplanes);

//api/v1/airplanes/:id GET
router.get('/:id', AirplaneController.getAirplane);


//api/v1/airplanes/:id DELETE
router.delete('/:id', AirplaneController.destroyAirplane);

router.patch('/:id', AirplaneController.updateAirplane );

module.exports = router;