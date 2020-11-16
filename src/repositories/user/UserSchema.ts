import * as mongoose from 'mongoose';

class UserSchema extends mongoose.Schema {

    constructor(collections: any) {

        const baseSchema = Object.assign({

            name: String,
            email: String,
            role: String,
            password: String,

        });

        super (baseSchema, collections);

    }
}

export default UserSchema;