const mongoose =  require('mongoose')

const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(
      `${process.env.MONGODB_URI}`
    );
    console.log(
      `\nMongoDB connected \n DB Host ${connectionDB.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB connection error");
    process.exit(1);
  }
};

module.exports = connectDB;

