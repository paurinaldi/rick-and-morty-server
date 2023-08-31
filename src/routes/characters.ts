import express from 'express';
import controllers from '../controllers/characters';
import authMiddleware from '../middleware/firebase';
const router = express.Router();

router
  .route('/characters/:sortBy/:page')
  .get(authMiddleware, controllers.getSortedCharacters);

export default router;
