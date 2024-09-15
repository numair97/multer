import express from 'express';
import StorageService from '../../service/StorageService';
import { PostMedia, ShowMedia } from '../../controller/MediaController';

const router = express.Router();

const upload = StorageService();

router.get('/', ShowMedia);
router.post('/upload', upload.single('media'), PostMedia);

export default router;
