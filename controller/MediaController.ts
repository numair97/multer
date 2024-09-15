import Media from "../model/Media"

function ShowMedia(req: any) {
    const result = Media.findOne({ mediaUrl: req.query});
    console.log(result)
}

async function PostMedia(req: any, res: any) {
    const media = new Media({ mediaUrl: `${process.env.API_DOMAIN}/images/${req.file.filename}` });
    await media.save();
    return res.status(200).send('File Uploaded')
}

export {
    PostMedia,
    ShowMedia
}
