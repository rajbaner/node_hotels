const mongoose = require('mongoose');
const mongoURL = 'mongodb://127.0.0.1:27017/hotel';

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("Connected to MongoDB Server");
});

db.on('error', (error) => {
    console.log("Error in connection", error);
});

db.on('disconnected', () => {
    console.log("Connection is disconnected");
});

module.exports = db;
