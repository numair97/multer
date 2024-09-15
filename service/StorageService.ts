import { randomUUID } from 'crypto';
import multer from 'multer';
import fs from 'fs'

const IMAGE_FOLDER_PATH = './public/images';

const StorageService = () => {
    const uuid = randomUUID();

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            if (!fs.existsSync(IMAGE_FOLDER_PATH)) {
                fs.mkdirSync(IMAGE_FOLDER_PATH)
            }
            cb(null, IMAGE_FOLDER_PATH)
        },

        filename: function (req, file, cb) {
            cb(null, uuid + file.originalname.replace(/\s+/g, '-').toLowerCase())
        },
    });

    return multer({ storage })
}

export default StorageService;
