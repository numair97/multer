import mongoose from "mongoose";

const ConnectMongoDB = () => {
    mongoose.connect('mongodb+srv://numair:numair321@numair.s4vid.mongodb.net/test_database?retryWrites=true&w=majority').then(() => {
        console.log('connection done')
    }).catch((err) => {
        console.log(err)
    });
}

export default ConnectMongoDB;
