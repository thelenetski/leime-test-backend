import { Router } from 'express';
import memesRouter from './memes.js';

const router = Router();

router.use('/memes', memesRouter);

export default router;
