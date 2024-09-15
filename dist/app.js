"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./database/db"));
const MediaRoute_1 = __importDefault(require("./routes/media/MediaRoute"));
dotenv_1.default.config();
const port = process.env.PORT;
const app = (0, express_1.default)();
(0, db_1.default)();
app.use(express_1.default.static('public'));
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use('/api/media', MediaRoute_1.default);
app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});
