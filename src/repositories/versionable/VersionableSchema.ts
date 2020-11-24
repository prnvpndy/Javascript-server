


import * as mongoose from 'mongoose'

class VersionableSchema extends mongoose.Schema {

    constructor(options: any, collections: any) {
        const versionedOptions = Object.assign({
            createdAt: {
                required:true,
                default: Date.now(),
                type: Date,
            },
            createdBy: { 
                required:true,
                type: String
            },
            updatedAt: {
                required:false,
                type: Date,
            },
            updatedBy: {
                required:false,
                type: String
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            deletedBy: {
                required:false,
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
