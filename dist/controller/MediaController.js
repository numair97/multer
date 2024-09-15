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
exports.PostMedia = PostMedia;
exports.ShowMedia = ShowMedia;
const Media_1 = __importDefault(require("../model/Media"));
function ShowMedia(req) {
    const result = Media_1.default.findOne({ mediaUrl: req.query });
    console.log(result);
}
function PostMedia(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const media = new Media_1.default({ mediaUrl: `${process.env.API_DOMAIN}/images/${req.file.filename}` });
        yield media.save();
        return res.status(200).send('File Uploaded');
    });
}
