import { Request, Response, NextFunction } from 'express';
import { BadRequest, Unauthorized } from 'http-errors';

import { decodeUserFromSessionToken } from '../utils/jwt-utils';

export async function authenticated(req: Request, res: Response, next: NextFunction) {
  const authorization = req.get('Authorization');
  if (!authorization) return next(new BadRequest('Authorization must be provided'));

  const jwt = authorization.split('JWT ')[1];
  try {
    const user = await decodeUserFromSessionToken(jwt);
    req.user = user;
    next();
  } catch (err) {
    next(new Unauthorized(err.message));
  }
}
