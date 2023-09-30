import Router from 'express-promise-router'

import {
  createEmployed,
  deleteEmployed,
  getAllEmployes,
  getEmployed,
  updateEmployed,
} from "../controllers/employed.controller.js";
import { isAuth } from "../middlewares/auth.iddleware.js";


const router = Router();

router.get("/employes",isAuth, getAllEmployes);

router.get("/employes/:id",isAuth, getEmployed);

router.post("/employes",isAuth, createEmployed);

router.put("/employes/:id",isAuth, updateEmployed);

router.delete("/employes/:id",isAuth, deleteEmployed);

export default router;
