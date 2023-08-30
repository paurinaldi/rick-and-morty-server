import express from 'express';
import controllers from '../controllers/user';

const router = express.Router();

router.route('/').get(controllers.getAllUsers).post(controllers.createUser);

export default router;
