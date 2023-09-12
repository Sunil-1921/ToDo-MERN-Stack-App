import mongoose from 'mongoose';

const DB_URL = "mongodb+srv://sunil:sunil@cluster0.zli2yli.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
    try {
        await mongoose.connect(DB_URL, { socketTimeoutMS: 45000, connectTimeoutMS: 45000 });
        console.log("mongodb connected...");
    }
    catch (error) {
        console.log("can't connect to mongodb, error=", error);
    }
}

export default connect;