import type { Server, Socket } from "socket.io";
import { games } from "../game.ts";

export const handleUpdateGame = (socket: Socket, io: Server) => {
  socket.on("updateGame", ({ roomId }) => {
    const game = games.get(roomId);

    if (!game) return console.log(`${roomId} not found`);

    io.to(roomId).emit("gameUpdate", game);
  });
};
