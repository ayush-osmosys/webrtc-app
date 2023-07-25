import { Socket } from "socket.io";
import { v4 as uuid } from "uuid";

const rooms: Record<string, string[]> = {};

interface IRoomParams {
  roomId: string;
  peerId: string;
}

export const roomHandler = (socket: Socket) => {
  const createRoom = () => {
    const roomId = uuid();
    socket.emit("room-created", { roomId });
    rooms[roomId] = [];
    console.log("Room created");
  };
  const leaveRoom = ({ roomId, peerId }: IRoomParams) => {
    rooms[roomId] = rooms[roomId].filter((user) => user != peerId);
    socket.to(roomId).emit("user-disconnect", {
      roomId,
      users: rooms[roomId],
    });
  };
  const joinRoom = ({ roomId, peerId }: IRoomParams) => {
    if (rooms[roomId]) {
      socket.join(roomId);
      rooms[roomId].push(peerId);
      socket.to(roomId).emit("user-joined", { peerId });
      socket.emit("get-users", {
        roomId,
        users: rooms[roomId],
      });
      console.log("Room joined", roomId, "peer Id ", peerId);
    }
    socket.on("disconnect", () => {
      leaveRoom({ roomId, peerId });
      console.log(`User ${peerId} letf the room ${peerId}`);
    });
  };
  socket.on("create-room", createRoom);
  socket.on("join-room", joinRoom);
};
