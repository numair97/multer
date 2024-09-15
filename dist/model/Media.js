"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const MediaSchema = new Schema({
    mediaUrl: String,
}, { timestamps: true });
const Media = mongoose_1.default.model('Media', MediaSchema);
exports.default = Media;
