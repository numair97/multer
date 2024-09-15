"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = require("crypto");
const multer_1 = __importDefault(require("multer"));
const fs_1 = __importDefault(require("fs"));
const IMAGE_FOLDER_PATH = './public/images';
const StorageService = () => {
    const uuid = (0, crypto_1.randomUUID)();
    const storage = multer_1.default.diskStorage({
        destination: function (req, file, cb) {
            if (!fs_1.default.existsSync(IMAGE_FOLDER_PATH)) {
                fs_1.default.mkdirSync(IMAGE_FOLDER_PATH);
            }
            cb(null, IMAGE_FOLDER_PATH);
        },
        filename: function (req, file, cb) {
            cb(null, uuid + file.originalname.replace(/\s+/g, '-').toLowerCase());
        },
    });
    return (0, multer_1.default)({ storage });
};
exports.default = StorageService;
