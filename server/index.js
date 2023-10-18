// Import required packages
const express = require("express");
const helmet = require("helmet");
const http = require("http");
const cors = require("cors");

// Initialize express app
const app = express();

// Create HTTP server and wrap the Express app
const server = http.createServer(app);

// Initialize Socket.io
// Save for when frontend is built
// const io = socketIo(server, {
//   cors: {
//     origin: [
//       `http://${process.env.FRONTEND_ADDR}`,
//     ],
//     methods: ["GET", "POST"],
//     credentials: true,
//   },
// });

// module.exports = { io };

// Configure CORS options
// Allow for frontend calls via cors
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Set up middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({
    contentSecurityPolicy: true,
  })
);

// Set up routes
app.use("/", require("./routes"));

// Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);

  // In production, avoid sending the stack trace to the client.
  if (process.env.NODE_ENV === "production") {
    res.status(500).json({ error: "Internal Server Error" });
  } else {
    res.status(500).json({ error: err.message });
  }
});
// Start the server
server.listen(process.env.SERVERPORT, () => {
  console.log(
    `Server started at http://${process.env.SERVERHOST}:${process.env.SERVERPORT}`
  );
});
