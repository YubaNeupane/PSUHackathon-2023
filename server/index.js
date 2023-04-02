import app from "./app.js";
import mongoose from "mongoose";
import { Server } from "socket.io";
import http from "http";

import env from "dotenv";

env.config();

const PORT = process.env.PORT || 5001;

const server = http.createServer(app);
const io = new Server(server);

io.on("connection", (socket) => {
  socket.on("joinChannel", (data) => {
    const { room } = JSON.parse(data);
    socket.join(room);
  });

  socket.on("sendMessage", (messages) => {
    const { room, message } = JSON.parse(messages);
    console.log("here");
    console.log(room);
    io.to(room).emit("messageReceived", message);
  });

  socket.on("disconnect", () => {
    console.log("A disconnection has been made");
  });
});

io.on("disconnect", (socket) => {
  console.log("connected");
});

server.on("error", (err) => {
  console.log("Error opening server");
});

mongoose
  .connect(process.env.PRODUCTION_DATABASE_MONGODB)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`App listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
