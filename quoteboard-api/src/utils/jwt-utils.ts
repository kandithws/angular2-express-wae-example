import * as jwt from 'jsonwebtoken';

import { UserDocument, User } from '../models/user';

const secret = '1234';

export function generateSessionToken(user: UserDocument): string {
  return jwt.sign({ id: user.id, updatedAt: user.updatedAt }, secret, { expiresIn: '3d' });
}

export async function decodeUserFromSessionToken(token: string): Promise<UserDocument> {
  const decoded: any = jwt.verify(token, secret);
  const user = await User.findById(decoded.id);
  return user;
}
