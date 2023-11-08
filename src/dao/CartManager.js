import CartModel from "../models/CartModel";

export default class CartManager {
    static async get(query = {}){
        const criteria = {};
        if (query.course){
            criteria.course = query.course;
        }
        return CartModel.find(criteria);
    }

    static async getById(sid){
        const cart = await CartModel.findById(sid);
        if(!cart){
            throw new Error ('Cart does not exist');
        }
        return cart;
    }


    static async create(data){
        const cart = await CartModel.create(data);
        console.log('Cart was created successully');
        return cart;
    }


    static async updateById(sid){
        const cart = await CartModel.findById(sid);
        if(!cart){
            throw new Error ('Cart does not exist');
        }
        const criteria = { _id: sid };
        const operation = { $set: data };
        await CartModel.updateOne(criteria, operation);
        console.log('Cart was updated correctly');
    }

    static async deleteById(sid){
        const cart = await CartModel.findById(sid);
        if(!cart){
            throw new Error ('Cart does not exist');
        }
        const criteria = { _id: sid };
        await CartModel.deleteOne(criteria, operation);
        console.log('Cart was deleted correctly');
    }

}