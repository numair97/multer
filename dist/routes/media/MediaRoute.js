"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StorageService_1 = __importDefault(require("../../service/StorageService"));
const MediaController_1 = require("../../controller/MediaController");
const router = express_1.default.Router();
const upload = (0, StorageService_1.default)();
router.get('/', MediaController_1.ShowMedia);
router.post('/upload', upload.single('media'), MediaController_1.PostMedia);
exports.default = router;
