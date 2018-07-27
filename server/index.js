import express from 'express';
import dbConfig from './config/db';
import secret from './config/secret';
import middlewaresConfig from './config/middlewares';
import headers from './config/headers';
import credits from './config/credits';
import { PersonRoutes } from './modules';

const app = express();

/* Database configuration */
dbConfig();

/* Middlewares configuration */
middlewaresConfig(app);

/* Setting up Cross Origin headers*/
headers(app);

/* Credits middleware */
credits();

/* Setting up the routes */
app.use('/api', PersonRoutes);

const PORT = process.env.PORT || secret.PORT;

//Launching the server
app.listen(PORT, err => {
    if (err) {
        console.log(err);
    }
    else {
        console.log('App is up and running');
    }
})