import express from 'express';
const router = express.Router();
import { postInvite } from '../controllers/friendInvitaion.controllers.js';
import { createValidator } from 'express-joi-validation';
import { verifyToken } from '../middleware/auth.middleware.js';

const validator = createValidator({});

import { postFriendInvitationScheema } from '../validators/ValidationSchemas.js'

router.post('/invite', verifyToken, validator.body(postFriendInvitationScheema), postInvite);

export default router;