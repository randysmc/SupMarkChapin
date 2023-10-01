import { pool } from "../db.js";


export const getAllTasks = async (req, res, next) => {
  console.log(req.userId);
  const result = await pool.query("SELECT * FROM tasks WHERE user_id = $1", [
    req.userId,
  ]);
  res.json(result.rows);
};

export const getTask = async (req, res) => {
  const result = await pool.query("SELECT * FROM tasks WHERE id= $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese Id",
    });
  }
  return res.json(result.rows[0]);
};

export const createTask = async (req, res, next) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description, user_id) VALUES($1, $2, $3) RETURNING *",
      [title, description, req.userId]
    );
    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "ya existe una tarea con ese titulo",
      });
    }
    next(error);
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;

  const result = await pool.query(
    "UPDATE tasks SET title = $1, description = $2 WHERE id = $3 RETURNING *",
    [title, description, id]
  );
  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }

  return res.json(result.rows[0]);
};

export const deleteTask = async (req, res) => {
  const result = await pool.query("DELETE FROM tasks WHERE ID = $1", [
    req.params.id,
  ]);

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una tarea con ese id",
    });
  }
  return res.sendStatus(204);
};
