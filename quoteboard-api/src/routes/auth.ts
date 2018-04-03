import { Router } from 'express';
import { BadRequest, Conflict, Unauthorized } from 'http-errors';
import { authenticate } from 'passport';

import { User, UserDocument } from '../models/user';
import { generateSessionToken } from '../utils/jwt-utils';

export const router = Router();

router.post('/sign_up', async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const passwordConfirmation = req.body.passwordConfirmation;

  if (password !== passwordConfirmation) return next(new BadRequest('Password does not match'));

  try {
    const user = await User.create({ email, password });
    res.json(user);

  } catch (err) {
    switch (err.code) {
      case 11000:
        if (err.errmsg.indexOf('email') >= 0)
          return next(new Conflict(`The email '${email}' has been used.`));

      default:
        break;
    }

    next(err);
  }
});

router.post('/sign_in', authenticate('local'), async (req, res, next) => {
  const user: UserDocument = req.user;
  const jwt = generateSessionToken(user);
  res.json({ user, jwt });
});
