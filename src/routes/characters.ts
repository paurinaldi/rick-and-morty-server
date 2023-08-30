import express from 'express';
import controllers from '../controllers/characters';

const router = express.Router();

router.route('/characters/:sortBy').get(controllers.getSortedCharacters);

export default router;
