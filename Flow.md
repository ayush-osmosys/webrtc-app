1. **Client-Side (room.ejs, script.js):**

   - A user opens the app and lands on the home page (`/` route).
   - The user is redirected to a specific room with a short identifier (e.g., `/roomid`) using the `room.ts` router.
   - The `room.ejs` file is rendered with the `roomId` provided.
   - The client-side script (`script.js`) sets up a connection with the server using Socket.IO and PeerJS.
   - It asks for the user's media access (video and audio) using `getUserMedia`.
   - The user's video stream is displayed on their screen.
   - The PeerJS library creates a new Peer object to handle the WebRTC connection.
   - When the Peer object is ready (open event), it emits a `join-room` event to the server with the `roomId` and the user's Peer ID (`id`).

2. **Server-Side (index.ts):**

   - The server sets up an Express app and HTTP server.
   - Socket.IO is configured to listen for WebSocket connections on the same HTTP server.
   - When a user connects to the server through a WebSocket (Socket.IO), the server logs "A Connection established."
   - When the server receives a `join-room` event from a client, it makes the client join the specific room indicated by the `roomId`.
   - The server then broadcasts to all other clients in the same room that a new user (`userId`) has connected.
   - If a user disconnects (`disconnect` event), the server broadcasts to all clients in the room that the user has disconnected.

3. **Client-Side (script.js continued):**

   - When a new user joins the room (`user-connected` event received), the client initiates a WebRTC call to that user using the Peer ID (`userId`).
   - The new user answers the call, and their video stream is added to the calling user's screen.
   - If a user disconnects (`user-disconnected` event received), the corresponding video element is removed.
