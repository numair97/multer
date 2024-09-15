import { timeStamp } from 'console';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const MediaSchema = new Schema({
    mediaUrl: String,
},
    { timestamps: true }
);

const Media = mongoose.model('Media', MediaSchema);

export default Media; 