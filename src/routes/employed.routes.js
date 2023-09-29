import { Router } from "express";

import {
  createEmployed,
  deleteEmployed,
  getAllEmployes,
  getEmployed,
  updateEmployed,
} from "../controllers/employed.controller.js";

const router = Router();

router.get("/employes", getAllEmployes);

router.get("/employes/:id", getEmployed);

router.post("/employes", createEmployed);

router.put("/employes/:id", updateEmployed);

router.delete("/employes/:id", deleteEmployed);

export default router;
