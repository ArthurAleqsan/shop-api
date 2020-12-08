import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import MongodbStorage from './storage/mongodb.storage.js';
import Config from './config/variables.js';
import LoggerUtil from './util/logger.util.js';

import productRoutes from './api/products/products.routes.js';


const { PORT, CORS_OPTIONS } = Config;

dotenv.config();

const app = express();

app.use(cors(CORS_OPTIONS));
app.use(bodyParser.urlencoded({ limit: '20mb', extended: false }));

app.use('/api/products', productRoutes)

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

const init = async () => {
    MongodbStorage.init();
    app.listen(PORT, () => {
        LoggerUtil.info(`App listening at http://localhost:${PORT}`);
    })
};

init();

