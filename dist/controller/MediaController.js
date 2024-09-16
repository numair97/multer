"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowMedia = exports.PostMedia = void 0;
const Media_1 = __importDefault(require("../model/Media"));
const ShowMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mediaUrl = `http://localhost:5000/images/${req.query.mediaUrl}`;
        if (!mediaUrl) {
            return res.status(400).json({ message: "mediaUrl query parameter is required" });
        }
        const result = yield Media_1.default.findOne({ mediaUrl });
        if (!result) {
            return res.status(404).json({ message: "Media not found" });
        }
        res.status(200).json(result);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.ShowMedia = ShowMedia;
const PostMedia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const media = new Media_1.default({ mediaUrl: `${process.env.API_DOMAIN}/images/${req.file.filename}` });
    yield media.save();
    return res.status(200).send('File Uploaded');
});
exports.PostMedia = PostMedia;
