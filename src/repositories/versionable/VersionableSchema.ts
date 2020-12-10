import * as mongoose from 'mongoose'

class VersionableSchema extends mongoose.Schema {
    constructor(options: any, collections: any) {
        const versionedOptions = Object.assign({
            createdAt: {
                default: Date.now,
                type: Date,
            },
            createdBy: {
                type: String
            },
            updatedAt: {
                default: Date.now,
                type: Date,
            },
            updatedBy: {
                type: String
            },
            deletedAt: {
               
                type: Date,
            },
            deletedBy: {
                type: String
            },
            originalId: {
                required: true,
                type: String,
            },

        }, options);
        super(versionedOptions, collections);
    }
}
export default VersionableSchema;