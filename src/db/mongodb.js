import mongoose from "mongoose";

export const init = async () => {
    try{
        const URI = 'mongodb+srv://vherrera010:Jazmin1646!@cluster0.0bqs67z.mongodb.net/e-commerce?retryWrites=true&w=majority';
        await mongoose.connect(URI);
        console.log('Database connected')
    } catch(error){
        console.log('An error has occurred', error.message)
    }
};

