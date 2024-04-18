import express, { NextFunction, Request, Response } from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import errorHandler from "../middlewares/errorHandler";

dotenv.config();

const app = express();

// Middlewares
app.use(errorHandler);
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Hello, From server!",
  });
});

app.get("/:name", (req: Request, res: Response, next: NextFunction) => {
  try {
    const greetMessage = `Hello, 🌄 : ${req.params.name}`;
    res.status(200).json({
      success: true,
      message: greetMessage,
    });
  } catch (error) {
    next(error);
  }
});

export default app;
