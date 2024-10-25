import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import express from "express";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

const port = process.env.PORT || 5000;

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// centralized error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An error occurred!", error: err.message });
});

app.use("/api/contacts", contactRoutes);

app.listen(port, () => console.log(`Server running on port: ${port}`));
