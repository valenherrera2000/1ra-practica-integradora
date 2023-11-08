import ProductModel from "../models/ProductModel";
import { Exception } from "../utils";

export default class ProductManager {
    static async get(query = {}) {
        const criteria = {};
        if (query.someField) {
            criteria.someField = query.someField;
        }
        return ProductModel.find(criteria);
    }

    static async getById(productId) {
        const product = await ProductModel.findById(productId);
        if (!product) {
            throw new Exception('Product does not exist', 404);
        }
        return product;
    }

    static async create(data) {
        const product = await ProductModel.create(data);
        console.log('Product was created successfully');
        return product;
    }

    static async updateById(productId, data) {
        const product = await ProductModel.findById(productId);
        if (!product) {
            throw new Exception('Product does not exist', 404);
        }
        const criteria = { _id: productId };
        const operation = { $set: data };
        await ProductModel.updateOne(criteria, operation);
        console.log('Product was updated correctly');
    }

    static async deleteById(productId) {
        const product = await ProductModel.findById(productId);
        if (!product) {
            throw new Exception('Product does not exist', 404);
        }
        const criteria = { _id: productId };
        await ProductModel.deleteOne(criteria);
        console.log('Product was deleted correctly');
    }
}
