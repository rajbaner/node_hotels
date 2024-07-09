require('dotenv').config();
const mongoose = require('mongoose');

const mongoURL = process.env.DB_URL;

mongoose.connect(mongoURL, {});

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
