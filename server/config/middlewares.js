import bodyParser from 'body-parser';
import morgan from 'morgan';

export default app => {
    //Executing the middlewares for parsing the data and consoling the actions in console
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(morgan('dev'));
}