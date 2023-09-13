import axios from "axios";
import * as cron from "node-cron";
import dotenv from "dotenv";
dotenv.config();

const APP_URL = process.env.APP_URL!;

cron.schedule('*/1 * * * *', async () => {
    try {
        const response = await axios.get(APP_URL);
        if (response.status === 200) {
            console.log("Request successful");
        } else {
            console.error("Request failed with status code:", response.status);
        }
    } catch (error) {
        console.error("Request failed with error:", error);
    }
});