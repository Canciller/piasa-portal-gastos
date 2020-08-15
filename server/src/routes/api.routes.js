import NotFoundError from '../util/error/NotFoundError';
import errorHandler from '../middleware/errorHandler';

import userRoutes from './user.routes';
import authRoutes from './auth.routes';

import checkPermissions from '../middleware/checkPermissions';

const router = require('express').Router();

router.use('/auth', authRoutes);
router.use('/users', checkPermissions('users'), userRoutes);
//router.use('/users', userRoutes);

router.use('*', (res, req, next) => next(new NotFoundError()));
router.use(errorHandler);

export default router;