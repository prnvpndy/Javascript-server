import * as mongoose from 'mongoose';
import seedData from '../Seed/seedData';

class Database {
      static open(mongoUrl) {
            return new Promise((resolve, reject) => {

                  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
                        if (err) {

                              reject(err);
                              return;
                        }
                        seedData();
                        resolve(undefined);

                  });
            });

      }
      static disconnect() { }
}

export default Database;