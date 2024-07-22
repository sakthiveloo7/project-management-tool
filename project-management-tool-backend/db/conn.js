require('dotenv').config();
const url = process.env.MONGODB_URL = 'sakthivelselvaraj68:G4Tvx0WG3TW00fEF@cluster0.vz9crvn.mongodb.net/';
const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', false)
    try {
        await mongoose.connect(url, () => console.log("Database connection established!"))
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}
  
module.exports = connectDB