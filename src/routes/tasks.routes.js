import { Router } from "express";

const router = Router();

router.get("/tasks", (req, res) => res.send("obteniendo tareas"));

router.get("/tasks/:id", (req, res) => res.send("obteniendo tarea"));

router.post("/tasks", (req, res) => res.send("creatareas"));

router.put("/tasks/:id", (req, res) => res.send("actu tareas"));

router.delete("/tasks/:id", (req, res) => res.send("delete tareas"));

export default router;
