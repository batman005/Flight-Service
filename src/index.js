const express = require('express');

const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);

    //bad code
    const { City, Airport } = require('./models');
    const bengaluru = await City.findByPk(2);
    console.log(bengaluru);
    // const airport = await Airport.create({name: 'Kempegowda Airport', code: 'BLR'});
    // const kmpairport = await bengaluru.createAirport({name:'Kempegoada',code:'BLR'});
    // console.log(kmpairport);

    // const kmpairport = await Airport.findByPk(2);
    // bengaluru.removeAirport(kmpairport);

    // await City.destroy({
    //     where:{
    //         id: 8,
    //     }
    // })

    // const city = await City.findByPk(3);
    // await city.createAirport({ name: 'Kolkata airport', code: 'CCU' });

    await City.destroy({
        where:{
            id:3,
        }
    })
});
