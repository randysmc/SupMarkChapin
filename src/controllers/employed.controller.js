import { pool } from "../db.js";

export const getAllEmployes = async (req, res) => {
  const allEmployes = await pool.query("SELECT * FROM reg_empleado.Empleado");
  res.json(allEmployes.rows);
};

export const getEmployed = async (req, res) => {
  const result = await pool.query(
    "SELECT * FROM reg_empleado.Empleado WHERE dpi= $1",
    [req.params.id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una empleadocon ese DPI",
    });
  }
  return res.json(result.rows[0]);
};

export const createEmployed = async (req, res) => {
  try {
    const {
      dpi,
      nombre,
      apellido,
      fecha_nacimiento,
      telefono,
      sucursal,
      salario,
      rol,
    } = req.body;
    const result = await pool.query(
      "INSERT INTO reg_empleado.Empleado VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
      [
        dpi,
        nombre,
        apellido,
        fecha_nacimiento,
        telefono,
        sucursal,
        salario,
        rol,
      ]
    );
    res.json(result.rows[0]);
  } catch (error) {
    if (error.code === "23505") {
      return res.status(409).json({
        message: "ya existe un empleado con ese DPI",
      });
    }
    next(error);
  }
};


export const deleteEmployed = async (req, res) => {
  const result = await pool.query(
    "DELETE FROM reg_empleado.Empleado WHERE dpi = $1",
    [req.params.id]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una empleado con ese No de DPI",
    });
  }
  return res.sendStatus(204);
};

export const updateEmployed = async (req, res) => {
  const id = req.params.id;
  const {
    nombre,
    apellido,
    fecha_nacimiento,
    telefono,
    sucursal,
    salario,
    rol,
  } = req.body;

  const result = await pool.query(
    "UPDATE reg_empleado.Empleado SET nombre = $1, apellido = $2, fecha_nacimiento = $3, telefono = $4, sucursal = $5, salario = $6, rol = $7 WHERE dpi = $8 RETURNING *",
    [nombre, apellido, fecha_nacimiento, telefono, sucursal, salario, rol, id]
  );
  if (result.rowCount === 0) {
    return res.status(404).json({
      message: "No existe una empleado con ese DPI",
    });
  }

  return res.json(result.rows[0]);
};


