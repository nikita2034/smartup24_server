import User, { IUser } from '../models/User';

async function getUserById(userId: string): Promise<IUser | null> {
  // return User.findById(userId);
  return User.findOne({ id:userId });
}

export default {
  getUserById,
};