const express = require('express');

const { AirportController } = require('../../controllers')

const {AirportMiddlewares} = require('../../middlewares');

const router = express.Router();


// /api/vi/airplanes POST

router.post('/', 
    AirportMiddlewares.validateCreateRequest,
    AirportController.createAirport);

// /api/v1/airplanes GET    
router.get('/', AirportController.getAirports);

//api/v1/airplanes/:id GET
router.get('/:id', AirportController.getAirport);


//api/v1/airplanes/:id DELETE
router.delete('/:id', AirportController.destroyAirport);

router.patch('/:id', AirportController.updateAirport );

module.exports = router;