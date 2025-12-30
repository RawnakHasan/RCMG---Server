import type { Server, Socket } from "socket.io";

export const handleGameChat = (socket: Socket, io: Server) => {
  socket.on("sendMessage", ({ roomId, message, username }) => {
    const newMessage = {
      sender: username,
      message,
    };

    io.to(roomId).emit("receiveMessage", newMessage);
  });
};
