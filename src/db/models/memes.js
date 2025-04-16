import { model, Schema } from 'mongoose';

const memesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: false,
    versionKey: false,
  },
);

export const MemesCollection = model('memes', memesSchema);
