import * as bcrypt from 'bcrypt';
import { promisify } from 'bluebird';
import { model, Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  email: string;
  encryptedPassword: string;
  createdAt: Date;
  updatedAt: Date;
  verifyPassword(password: string): boolean;
}

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  encryptedPassword: { type: String, require: true }

}, { timestamps: true });

schema.virtual('password').set(function(password: string) {
  this.encryptedPassword = bcrypt.hashSync(password, 10);
});

schema.methods.verifyPassword = function(password: string): boolean {
  return bcrypt.compareSync(password, this.encryptedPassword);
};

schema.methods.toJSON = function() {
  const obj = this.toObject();
  delete obj.encryptedPassword;
  return obj;
};

export const User = model<UserDocument>('User', schema);
