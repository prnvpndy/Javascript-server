import * as mongoose from "mongoose";
import { DocumentQuery, Query } from "mongoose";
import IVersionableDocument from './IVersionableDocument';

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>>
{

    public static generateObjectId() {
        return String(mongoose.Types.ObjectId());
    }

    private model: M;
    constructor(model) {
        this.model = model;
    }

    public async create(options: any): Promise<D> {
        console.log("VersioningRepository :: create ", options);
        const id = VersioningRepository.generateObjectId();
        const model = new this.model({
            ...options,
            _id: id,
            originalId: id,
            createdAt: Date.now(),
            createdBy: id
        });
        return await model.save();
    }

    public count(query: any): Query<number> {
        const finalQuery = { deleteAt: null, ...query };
        return this.model.countDocuments(finalQuery);
    }

    public getAll(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
        const finalQuery = { deleteAt: null, ...query };
        return this.model.find(finalQuery, projection, options);
    }

    public findOne(query: any): mongoose.DocumentQuery<D, D> {
        const finalQuery = { deleteAt: null, ...query };
        return this.model.findOne(finalQuery);
    }

    public invalidate(id: any): DocumentQuery<D, D> {
        return this.model.update({ originalId: id, deletedAt: null }, {});
    }



    public async update(id: string, data: any): Promise<D> {
        console.log('Inside versionRepo',id)
        let originalData;
        const prev = await this.findOne({ originalId: id, deletedAt: null, deletedBy: null })

        console.log('value of prev ', prev)
        
        originalData = prev;
      
        this.invalidate(originalData);

        console.log('values',originalData)

        const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), data);
        newData._id = VersioningRepository.generateObjectId();
        delete newData.deletedAt;
        const model = new this.model(newData);
        return model.save();
    }
    public async updateOne(originalData: any) {
        const oldId = originalData._id;
        const oldModel = {
            ...originalData,
            deletedBy: oldId,
            deletedAt: Date.now(),
        };
        this.model.updateOne({ originalId: oldId }, oldModel)
            .then((res) => {
                if (res === null) {
                    throw 'Error';
                }
            })
            .catch((err) => { console.log("errror is : ", err) });
    }

    public async delete(id: string, remover: string) {

        let originalData;

        await this.findOne({ id: id, deletedAt: null })
            .then((data) => {
                if (data === null) {
                    throw '';
                }

                originalData = data;
                const oldId = originalData._id;

                const modelDelete = {
                    deletedAt: Date.now(),
                    deletedBy: remover,
                };

                this.model.updateOne({ _id: oldId }, modelDelete)
                    .then((res) => {
                        if (res === null) {
                            throw '';
                        }
                    });

            });
    }
    public async list(userRole, sort, skip, limit, searchBy): Promise<D[]> {
        return this.model.find({role: userRole, deletedAt: undefined, ...searchBy}).sort(sort).skip(Number(skip)).limit(Number(limit));
    }
}
