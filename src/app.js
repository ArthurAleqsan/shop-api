import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import MongodbStorage from './storage/mongodb.storage.js';
import Config from './config/variables.js';
import LoggerUtil from './util/logger.util.js';



const { PORT, CORS_OPTIONS } = Config;

dotenv.config();

const app = express();

app.use(cors(CORS_OPTIONS));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const init = async () => {
    MongodbStorage.init();
    app.listen(PORT, () => {
        LoggerUtil.info(`App listening at http://localhost:${PORT}`);
    })
};

init();

