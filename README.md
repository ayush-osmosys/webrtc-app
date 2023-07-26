# WebRTC Video Chat App

This is a real-time WebRTC-based video chat application built using Node.js, Express, Socket.IO, and PeerJS. It allows users to join video conference rooms and have live video and audio communication with other participants.

## Features

- Real-time video and audio streaming through WebRTC.
- Multiple users can join the same video conference room.
- Simple and easy-to-use interface for video conferencing.

## Prerequisites

- Node.js (>= 14.0.0)
- npm (>= 6.0.0)

## Installation and Setup

1. Clone the repository to your local machine.

```bash
git clone https://github.com/ayush-osmosys/webrtc-app.git
cd webrtc-app
```

2. Install the dependencies.

```bash
npm install
```

3. Create a `.env` file in the root of the project and set the environment variables.

```
PORT=2403
```

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your web browser and navigate to `http://localhost:2403` to access the app.

3. Enter a room by providing the room ID in the URL (e.g., `http://localhost:2403/your-room-id`).

4. Share the room ID with others to invite them to the video conference.

5. Grant permission for camera and microphone access when prompted by the browser.

6. Enjoy real-time video and audio communication with other participants in the same room!

## Technologies Used

- Node.js
- Express
- Socket.IO
- PeerJS
- TypeScript
- EJS (Embedded JavaScript templates)
