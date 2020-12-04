import express from 'express';
import dotenv from 'dotenv';
import MongodbStorage from './storage/mongodb.storage.js';
import Config from './config/variables.js';
import LoggerUtil from './util/logger.util.js';
// import cors from 'cors';


const { PORT } = Config;

dotenv.config();
// const DB = new connectDB();

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const init = async () => {
    MongodbStorage.init();
    app.listen(PORT, () => {
        LoggerUtil.info(`Example app listening at http://localhost:${PORT}`);
    })
};

init();

