import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";

export const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = uuid();
    socket.emit("room-created", { roomId });
    console.log("Room created");
  };
  const joinRoom = ({ roomId }: { roomId: string }) => {
    socket.join(roomId);
    console.log("Room joined" + roomId);
  };
  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
};
