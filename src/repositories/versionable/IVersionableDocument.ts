import * as mongoose from 'mongoose'

export default interface IVersionableDocument extends mongoose.Document {

    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    createdBy: String;
    updatedBy: String;
    deletedBy: String;
    originalId: String;
}