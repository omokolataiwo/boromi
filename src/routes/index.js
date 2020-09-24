import { Router } from 'express';
import loan from './loan'
import * as User from '../controllers/user';

const router = Router();

router.get('/signup', User.signup);
router.get('/login', User.login);
router.use('/loan', loan);

export default router;