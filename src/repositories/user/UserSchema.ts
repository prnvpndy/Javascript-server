import * as mongoose from 'mongoose';
import VersionableSchema from '../versionable/VersionableSchema'

class UserSchema extends VersionableSchema {

    constructor(collections: any) {

        const baseSchema =Object.assign({

            _id: String,
            name: String,
            email: String,
            role: String,
            password: String,
            originalId: String,
            deletedAt: Date

        });

        super (baseSchema, collections);

    }
}

export default UserSchema;