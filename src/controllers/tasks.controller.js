import { pool } from "../db.js";

export const getAllTasks = async (req, res, next) => {
  console.log(req.userId);
  const result = await pool.query("SELECT * FROM tasks");
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

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES($1, $2) RETURNING *",
      [title, description]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
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
