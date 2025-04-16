import createHttpError from 'http-errors';
import { MemesCollection } from '../db/models/memes.js';

export const getMemes = async () => {
  const memes = MemesCollection.find();

  return memes;
};

export const editMem = async (payload) => {
  const mem = await MemesCollection.findOneAndUpdate(
    { _id: payload.id },
    payload.data,
    {
      new: true,
      includeResultMetadata: false,
    },
  );

  if (!mem) throw createHttpError(404, 'Mem not found');

  return mem;
};
