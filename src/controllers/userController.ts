import { Request, Response } from 'express';
import userService from '../services/userService';

async function getUser(req: Request, res: Response) {
  const userId = req.params.id;

  try {
    const user = await userService.getUserById(userId);

    if (!user) {
      return res.status(404).json({ message: 'Пользователь не найден' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Произошла ошибка на сервере' });
  }
}

export default {
  getUser,
};