const Config = {
    CORS: {
        ORIGIN: process.env.CORS_ORIGIN || '*',
    },
    PORT: process.env.PORT || 5000,
    MONGODB: {
        URL: process.env.MONGODB_URL || 'mongodb+srv://admin:admin123@cluster0.tbqax.mongodb.net/shop-api?retryWrites=true&w=majority',
    },
    MONGO_OPTIONS : {
        keepAlive: true,
        poolSize: 10,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}
export default Config;