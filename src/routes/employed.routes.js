import { Router } from 'express';

const router = Router()

router.get('/employed', (req, res) => res.send('Obteniendo empleados'))

export default router;