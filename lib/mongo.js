const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;

export const MONGO_URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@cluster0.w6oq7zn.mongodb.net/stock?retryWrites=true&w=majority&appName=Cluster0`;
