// require mongoose
const mongoose = require ('mongoose')
// connect db
const connectDB = async ()=> {
    try {
       await mongoose.connect(process.env.MONGO_URL)
    console.log('Database is connected')
    } catch (error) {
       console.log(`connection to database is failed ${error}`) 
    }
}
module.exports = connectDB
