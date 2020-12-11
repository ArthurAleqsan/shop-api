const Config = {
    PORT: process.env.PORT || 5000,
    MONGODB: {
        URL: process.env.MONGODB_URL || 'mongodb+srv://admin:admin123@cluster0.tbqax.mongodb.net/shop-api?retryWrites=true&w=majority',
    },
    MONGO_OPTIONS: {
        keepAlive: true,
        poolSize: 10,
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    CORS_OPTIONS: {
        origin: process.env.CORS_ORIGIN || '*',
        methods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Authorization', 'Content-Type', 'Origin'],
        credentials: true,
        optionsSuccessStatus: 200,
        maxAge: -1
    }
}
export default Config