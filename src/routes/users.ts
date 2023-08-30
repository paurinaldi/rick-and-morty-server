import express from 'express';
import controllers from '../controllers/user';

const router = express.Router();

router.route('/').get(controllers.getAllUsers).post(controllers.createUser);
router.route('/:id').patch(controllers.updateFavoriteCharacter);

export default router;
