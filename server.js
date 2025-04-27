import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import cors from "cors";

import connectDB from "./src/db/connectDB.js";
import Cloudinary from "./src/utils/Cloudinary.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB();
Cloudinary();

app.get("/", (req, res) => res.send("api is working"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🌐Server is running on port ${PORT}`));
