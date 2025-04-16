import { isValidObjectId } from 'mongoose';
import createHttpError from 'http-errors';

export const isValidId = (req, res, next) => {
  const { memId } = req.params;
  if (!isValidObjectId(memId)) {
    throw createHttpError(400, 'Invalid mem id');
  }

  next();
};
