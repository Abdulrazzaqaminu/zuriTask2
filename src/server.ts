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
    } catch (error) {
        throw error;
    }
}
});
// Middlewares
app.use(express.json());
app.use("/api" ,personRoute);

// Server started
app.listen(PORT, () => {
    connect();
});
