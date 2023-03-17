import mongoose from "mongoose";
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-d0lowvp-shard-00-00.jiabsqz.mongodb.net:27017,ac-d0lowvp-shard-00-01.jiabsqz.mongodb.net:27017,ac-d0lowvp-shard-00-02.jiabsqz.mongodb.net:27017/?ssl=true&replicaSet=atlas-12bhod-shard-0&authSource=admin&retryWrites=true&w=majority`;

    try {
        await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Successfully connected to database")
    } catch (e) {
        console.log("Error while connecting to database", e);
    }

}

export default Connection;
