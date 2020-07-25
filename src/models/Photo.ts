import { Schema, model, Document } from 'mongoose';

const PHOTO = new Schema({
  title: String,
  description: String,
  imagePath: String,
});

interface IPhoto extends Document {
  title: string;
  description: string;
  imagePath: string;
}
export default model<IPhoto>('Photo', PHOTO);
