import express from 'express';
import userRouter from './users';
import characterRouter from './characters';

const router = express.Router();

router.use('/user', userRouter);
router.use('/api', characterRouter);

export default router;
