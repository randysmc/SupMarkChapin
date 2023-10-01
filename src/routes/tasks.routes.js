import Router from "express-promise-router";
//import { Router } from "express";
import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from "../controllers/tasks.controller.js";

import { isAuth } from "../middlewares/auth.middleware.js";

import { validateSchema } from "../middlewares/validate.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const router = Router();

router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", validateSchema(createTaskSchema), createTask);

router.put("/tasks/:id", validateSchema(updateTaskSchema), updateTask);

router.delete("/tasks/:id",  deleteTask);

export default router;
