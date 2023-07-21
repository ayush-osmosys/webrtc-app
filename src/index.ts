import express from "express";
import http from "http";
import { Server } from "socket.io";

import env from "./env.config.js";

const PORT = env.PORT;
const app = express();
const server = http.createServer(app);
const io = new Server(server);

server.listen(PORT, () => console.log("listening on port " + PORT));
io.on("connection", () => console.log("A Connection established"));
