import { Router } from 'express';
const router = Router();

import controller_import from './controller'; 
const controller = new controller_import();
import validator from './libs/validator';

router.post('/update/serie/views', validator, controller.views);
router.post('/update/serie/viewing', validator, controller.viewing);

export default router;