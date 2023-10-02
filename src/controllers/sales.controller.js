import { pool } from "../db.js";



export const getAllSales = async (req, res, next) => {
  try {
    const allSales = await pool.query("SELECT * FROM reg_venta.venta");
    res.json(allSales.rows)
  } catch (error) {
    next(error);
  }
};

export const getSale = async (req, res, next) => {
    try{
        const {id} = req.params;

        const result = await pool.query("SELECT * FROM reg_venta.venta WHERE id_venta= $1", [id]);

        if(result.rows.length ===0 )
            return res.status(404).json({
        message: "venta no encontrada"});

        res.json(result.rows[0]);
    } catch(error){
        next(error);
    }
}

export const createSale = async(req, res, next) => {
    try {
        const{id_venta, empleado, cliente, fecha_venta, sucursal, total} = req.body;
        const result = await pool.query(
            "INSERT INTO reg_venta.venta VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
            [id_venta, empleado, cliente,fecha_venta, sucursal, total]
        );
        res.json(result.rows[0]);
    } catch (error) {
        if(error.code === "23505"){
            return res.status(409).json({
                message: "ya existe una venta con ese id_venta"
            });
        }
        next(error);
    }
}
