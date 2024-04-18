import { NextFunction, Request, Response } from "express";

const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    success: true,
    message: process.env.NODE_ENV === "production" ? "💔" : error?.stack,
  });
};

export default errorHandler;
