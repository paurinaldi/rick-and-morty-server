import express from 'express';
import controllers from '../controllers/user';
import authMiddleware from '../middleware/firebase';

const router = express.Router();

router.route('/').get(controllers.getAllUsers).post(controllers.createUser);
router.route('/:id').patch(authMiddleware, controllers.updateFavoriteCharacter);

export default router;
