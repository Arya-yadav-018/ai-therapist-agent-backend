import mongoose from "mongoose";
import { logger } from "./logger";

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://wdeveloperarya:7Sdnrsd8SH8hB01E@cluster0.glo5n7z.mongodb.net/";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    logger.info("Connected to MongoDB ");
  } catch (error) {
    logger.error("MongoDB connection error:", error);
    process.exit(1);
  }
};
