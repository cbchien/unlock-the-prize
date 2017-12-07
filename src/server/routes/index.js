import express from 'express';

import authRouter from './auth';
import api from './api';

const router = express.Router();
// for user register and login auth
router.use('/auth', authRouter);

// app api
router.use('/api', api);

export default router;
