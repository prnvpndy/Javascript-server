import * as mongoose from 'mongoose';
import seedData from '../Seed/seedData';

class Database {
    static open (mongoUrl) {
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
            console.log(mongoUrl);
        mongoose.connect( mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
            if ( err ) {
                console.log(err);
                reject(err);
                return;
            }
            seedData();
            resolve(undefined);
            
        });
        
           });

    }
    static disconnect () {
        console.log('Inside Disconnect');
    }
}

export default Database;