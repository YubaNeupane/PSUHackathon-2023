import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import userRoutes from "./routes/users.js";

const app = express();
// const server = http.creatServer(app);
// const io = socketio(server);
// middleware
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// Route for user
app.use("/api/v1/user", userRoutes);

export default app;
