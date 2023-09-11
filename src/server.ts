// Imports
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// Import Routes
import personRoute from "./Routes/Person";

const app = express();

// Env
const PORT: string = process.env.PORT!;
const MONGODB_URL: string = process.env.MONGODB_URL!;
// Mongodb connection
const connect = async (): Promise<void> => {
    try {
        await mongoose.connect(MONGODB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        throw error;
    }
}
const DB = mongoose.connection;
DB.on("disconnected", (error: Error) =>{
    console.log("MongoDB disconnected!", error);
});
DB.on("connected", () =>{
    console.log("MongoDB connected!");
});
// Middlewares
app.use(express.json());
app.use("/api" ,personRoute);

// Server started
app.listen(PORT, () => {
    connect();
    console.log(`Port 4040`);
});