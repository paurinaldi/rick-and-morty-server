import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import charactersRouter from './routes/characters';
import firebaseApp from './helpers/firebase';
import router from './routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/', router);

const mongooseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    firebaseApp.appCheck();
    app.listen(PORT, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

mongooseConnect();
