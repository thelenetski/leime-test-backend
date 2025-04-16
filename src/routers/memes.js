import { Router } from 'express';
import {
  getMemesController,
  patchMemController,
} from '../controllers/memes.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { editMemesSchema } from '../validation/memes.js';

const memesRouter = Router();

memesRouter.get('/', ctrlWrapper(getMemesController));

memesRouter.patch(
  '/:memId',
  isValidId,
  validateBody(editMemesSchema),
  ctrlWrapper(patchMemController),
);

export default memesRouter;
