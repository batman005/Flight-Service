const express = require('express');

const { InfoController } = require('../../controllers');

const  airplaneRoutes = require('./airplane-routes');
const cityRoutes  = require('./city-routes');
const airportRoutes = require('./airport-routes');

const router = express.Router();

router.use('/airports',airportRoutes);
router.use('/airplanes', airplaneRoutes);
router.use('/cities', cityRoutes);

router.get('/info', InfoController.info);

module.exports = router;