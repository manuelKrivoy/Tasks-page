import { connect } from "mongoose";
require('dotenv').config();

const password = process.env.password
const connectDB = async () => {
  try {
    await connect(`mongodb+srv://krivoymanuel:${password}@crud.mgvmwdt.mongodb.net/?retryWrites=true&w=majority`);
    console.log("Connected to MongoDB successfully!"); 
  } catch (error) {
    console.error(error);
    process.exit(1);
  } 
};

export default connectDB;

