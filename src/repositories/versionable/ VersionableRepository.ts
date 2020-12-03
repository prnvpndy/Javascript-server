import * as mongoose from "mongoose";
import { DocumentQuery, Query } from "mongoose";

export default class VersioningRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
      public static generateObjectId() {
            return String(mongoose.Types.ObjectId());
      }

      private model: M;
      constructor(model) {
            this.model = model;
      }

      public async create(options: any): Promise<D> {

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
            const finalQuery = { deleteAt: undefined, ...query };
            return this.model.countDocuments(finalQuery);
      }

      public getAll(query: any = {}, projection: any = {}, options: any = {}): DocumentQuery<D[], D> {
            const finalQuery = { deleteAt: undefined, ...query };
            return this.model.find(finalQuery, projection, options);
      }

      public findOne(query: any): mongoose.DocumentQuery<D, D> {
            const finalQuery = { deleteAt: undefined, ...query };
            return this.model.findOne(finalQuery);
      }

      public invalidate(id: any, prev: any): DocumentQuery<D, D> {
            const updateToData = {
                  deletedAt: Date.now(),
            }
            return this.model.updateOne({ _id: id, deletedAt: undefined }, updateToData);
      }

      public async update(originalId: string, restData: any): Promise<D> {
            const prev = await this.findOne({ originalId, deletedAt: undefined });

            const originalData = prev;
            const id1 = originalData._id;
            await this.invalidate(id1, prev);



            const newData = Object.assign(JSON.parse(JSON.stringify(originalData)), restData);
            newData._id = VersioningRepository.generateObjectId();

            delete newData.deletedAt;
            delete newData.deletedBy;
            const model = new this.model(newData);
            return model.save();
      }
      public async delete(id: any, remover: any) {

            let originalData;

            await this.findOne({ originalId: id, deletedAt: undefined, deletedBy: undefined })
                  .then((data) => {
                        if (data === null) {
                              throw '';
                        }

                        originalData = data;
                        const oldId = originalData._id;

                        const modelDelete = {
                              ...originalData,
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
      public async list(userRole, sort, skip, limit): Promise<D[]> {
            return this.model.find({role: userRole}).sort(sort).skip(Number(skip)).limit(Number(limit));
      }
      
}

