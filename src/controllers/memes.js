import { editMem, getMemes } from '../services/memes.js';
import createHttpError from 'http-errors';

export const getMemesController = async (req, res) => {
  const memes = await getMemes();

  if (memes.length === 0) {
    throw createHttpError(404, 'Memes not found');
  }

  res.json({
    status: 200,
    message: 'Successfully found memes!',
    results: memes,
  });
};

export const patchMemController = async (req, res) => {
  const { memId } = req.params;

  const result = await editMem({ id: memId, data: req.body });

  if (!result) {
    throw createHttpError(404, 'Mem not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched a mem!`,
    data: result,
  });
};
