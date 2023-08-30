import { model, Schema } from 'mongoose';
import { User } from '../types';

export const userSchema = new Schema({
  firebaseUid: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  favoriteCharacters: [
    {
      type: String,
      required: false,
    },
  ],
});

export default model<User>('User', userSchema);
