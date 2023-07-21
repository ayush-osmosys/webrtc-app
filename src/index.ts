import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";

import env from "./env.config.js";

const PORT = env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.use(cors);

server.listen(PORT, () => console.log("listening on port " + PORT));
io.on("connection", (socket) => {
  console.log("A Connection established");
  socket.on("disconnect", () => console.log("Disconnected"));
});
