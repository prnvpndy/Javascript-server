import * as mongoose from 'mongoose';


class Database {
    static open (mongooUrl){
        return new Promise((resolve, reject) => {
            console.log('Inside open method');
        mongoose.connect(mongooUrl,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
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