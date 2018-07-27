import mongoose from 'mongoose';
import secret from './secret';

export default () => {
    //This allows developer to use Promises on Mongoose
    mongoose.Promise = global.Promise;

    //Configuration for connection
    const url = `mongodb://${secret.db.username}:${secret.db.password}@ds257241.mlab.com:57241/phonebook`;
    const myConfig = { useNewUrlParser: true };

    //Connecting the database to mlab.com
    mongoose.connect(url, myConfig, err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Database is up and running')
        }
    });
}