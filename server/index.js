// Import required packages
const express = require("express");
const session = require("express-session");
const helmet = require("helmet");
const socketIo = require("socket.io");
const http = require("http");
const cors = require("cors");
const MySQLStore = require("express-mysql-session")(session);

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

// Helper function for cookie expiration
function cookieExpire() {
  this.SECOND = 1000;
  this.MINUTE = this.SECOND * 60;
  this.HOUR = this.MINUTE * 60;
  this.DAY = this.HOUR * 24;
}

const mySqlSessionOptions = {
  host: process.env.MYSQL_HOST,
  port: 3306,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  createDatabaseTable: true,
};

const mySqlSessionStore = new MySQLStore(mySqlSessionOptions);

// Configure express-session
app.use(
  session({
    store: mySqlSessionStore,
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      secure: true, // Ensure cookies are sent only over HTTPS
      httpOnly: true, // Ensure the cookie is not accessible via JavaScript
      sameSite: "lax", // Use the 'lax' setting for sameSite to provide a level of CSRF protection
      maxAge: new cookieExpire().DAY * 7,
    },
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
