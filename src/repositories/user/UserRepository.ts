import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/ VersionableRepository';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }
    public findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return userModel.findOne(query).lean();
    }
    public getAllUser(query: any,  options?: any): any {
        return super.getAll(query, {}, options)
    }
    public create(data: any): Promise<IUserModel> {

        return super.create(data);
    }
    public update(id: any, data: any): Promise<IUserModel> {

        return super.update(id, data);
    }

    public deleteData(id) {
        return super.delete(id);
    }
    public count() {
        return userModel.countDocuments();
    }
    public find(query, projection?: any, options?: any): any {
        return userModel.find(query, projection, options)
    }

}