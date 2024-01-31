import { Router } from 'express';
import { getImages } from '../controllers/images.js';

const imgRouter = Router();

imgRouter.get('/img/:id', getImages);

export default imgRouter;