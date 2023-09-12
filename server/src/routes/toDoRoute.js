import express from 'express';
// import { authMiddleware } from '../middleware/authMiddleware.js';
import { createToDoNew, getToDoData } from '../controller/toDoController.js';

const toDoRoute = express.Router();

// // toDoRoute.post("/create", authMiddleware, createToDoNew)
toDoRoute.post("/create", createToDoNew)
toDoRoute.get("/gettododata", getToDoData);
export default toDoRoute;