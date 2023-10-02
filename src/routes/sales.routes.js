import Router from "express-promise-router";

import {
    getSale,
    getAllSales,
} from "../controllers/sales.controller.js"


import {isAuth} from "../middlewares/auth.middleware.js"

import { validateSchema } from "../middlewares/validate.middleware.js";


const router = Router();

router.get("/sales", getAllSales);

router.get("/sales/:id", getSale);



export default router;