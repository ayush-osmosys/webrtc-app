import express from "express";
import http from "http";

import { Server } from "socket.io";

import env from "./env.config.js";
import homeRouter from "./routes/home.js";

const PORT = env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(PORT, () => console.log("listening on port", PORT));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(homeRouter);

io.on("connection", (socket) => {
  console.log("A Connection established");
  socket.on("disconnect", () => console.log("Disconnected"));
});
