import { connect } from "mongoose";
import { password } from "./config";

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

