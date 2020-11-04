import * as mongoose from 'mongoose';


class Database {
    static open (MONGO_URL){
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
        mongoose.connect(MONGO_URL,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
            if(err) {
                console.log(err);
                reject(err);
                return;
            }
            resolve(null);
            // console.log("Successfully conected to Mongo");
        })
           })

    }
    static disconnect () {
        console.log("Inside Disconnect");
    }
}

export default Database;