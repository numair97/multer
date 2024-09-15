import express from 'express';
import dotenv from 'dotenv';
import ConnectMongoDB from './database/db';
import MediaRoute from './routes/media/MediaRoute'

dotenv.config();

const port = process.env.PORT;
const app = express();

ConnectMongoDB();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/media', MediaRoute);

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
});
