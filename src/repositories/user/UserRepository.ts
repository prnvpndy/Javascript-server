// 


import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/ VersionableRepository';
import { query } from 'express';
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }
    constructor() {
        super(userModel);
    }
    public findOne(query): mongoose.DocumentQuery<IUserModel, IUserModel, {}> {
        return super.findOne(query).lean();
    }
    public find(query, projection?: any, options?: any): any {
        return super.find(query, projection, options)
    }
    public create(data: any): Promise<IUserModel> {
        console.log('UserRepository:: create', data);
        const id = UserRepository.generateObjectId();
        const model = new userModel({
            _id: id,
            createdAt: Date.now,
            originalId: id,
            ...data,
        });
        return model.save();
    }
    public update(id: any, data: any): Promise<IUserModel> {
        console.log('USerRepository:: update', data);
        return super.update(data, id);
    }

    public deleteData(id, remover) {
        return super.delete(id, remover);
    }
    public count() {
        return super.count(query);
    }
    public list1( sort, skip, limit){
        return super.list( sort, skip, limit);
     }

}