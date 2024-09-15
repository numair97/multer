"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StorageService_1 = __importDefault(require("./service/StorageService"));
const app = (0, express_1.default)();
const upload = (0, StorageService_1.default)();
app.post('/upload', upload.single('media'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No File Found');
    }
    else {
        res.send(`File Uploaded Successfully ${res.json()}`);
    }
});
