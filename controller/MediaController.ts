import Media from "../model/Media"

const ShowMedia = async (req: any, res: any) => {

    try {

        const mediaUrl = `http://localhost:5000/images/${req.query.mediaUrl}`;

        if (!mediaUrl) {
            return res.status(400).json({ message: "mediaUrl query parameter is required" });
        }

        const result = await Media.findOne({ mediaUrl });

        if (!result) {
            return res.status(404).json({ message: "Media not found" });
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const PostMedia = async (req: any, res: any) => {
    const media = new Media({ mediaUrl: `${process.env.API_DOMAIN}/images/${req.file.filename}` });
    await media.save();
    return res.status(200).send('File Uploaded')
}

export { PostMedia, ShowMedia }
