const express = require('express');

const { CityController } = require('../../controllers')


const router = express.Router();


// /api/vi/cities POST

router.post('/', 
    CityController.createCity);


module.exports = router;