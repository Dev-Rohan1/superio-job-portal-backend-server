import mongoose from "mongoose";

const connectDB = async () => {
  mongoose
    .connect(`${process.env.DATABASE_CONNECTION_URL}/superio-job-portal`)
    .then(() => console.log("✅ Database connected successfully"))
    .catch((err) => {
      console.log("❎ Database connection failed");
      console.log(err);
    });
};

export default connectDB;
