import express from "express";
import artPieceRoutes from "./src/features/artPiece/artPiece.routes.js";
const app = express();
app.use(express.json());

// Middleware function to log request information
const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;
  
    // Log the request information
    console.log(`[${timestamp}] ${method} ${url}`);
  
    // Move on to the next middleware or route handler
    next();
  };
  
  // Use the logRequest middleware for all incoming requests
  app.use(logRequest);
app.use("/api/artPieces", logRequest,artPieceRoutes);

export default app;
