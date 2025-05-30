const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect(
            "mongodb://user:password@localhost:27017/tests",
            {
                useNewUrlParser: true
            }
        );
    } catch (error) {
        console.error("MongoDB connection error");
        console.error(error)
    }
}

module.exports = {
    connect
}