"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ConnectMongoDB = () => {
    mongoose_1.default.connect('mongodb+srv://numair:numair321@numair.s4vid.mongodb.net/test_database?retryWrites=true&w=majority').then(() => {
        console.log('connection done');
    }).catch((err) => {
        console.log(err);
    });
};
exports.default = ConnectMongoDB;
