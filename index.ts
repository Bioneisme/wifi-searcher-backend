import cors from "cors";
import usersRoutes from "./routes/userRoute";
import {MONGO_URI, SERVER_PORT} from "./config/settings";
import logger from "./config/logger";
import express, {Application} from "express";
import mongoose from "mongoose";

const app: Application = express();

app.use(express.json());
app.use(cors());

app.use("/api/users", usersRoutes);

app.listen(SERVER_PORT, async () => {
    await mongoose.connect(MONGO_URI, () => logger.info(`MongoDB Connected`));

    logger.info(`Server Started on port ${SERVER_PORT}`);
});
