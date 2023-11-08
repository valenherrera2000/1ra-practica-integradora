import MessageModel from "../models/MessageModel";

export default class MessageManager {
    static async get() {
        return MessageModel.find();
    }

    static async create(data) {
        const message = await MessageModel.create(data);
        console.log('Message was created successfully');
        return message;
    }
}
