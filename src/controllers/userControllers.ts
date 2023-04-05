import userServices from "../services/userServices.js";
import { Request, Response, NextFunction } from 'express';
import * as t from "../protocols/types.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const newUser = req.body as t.UserRaw;
  try {
    const userCreated = await userServices.create(newUser);
    return res.send(`Usuários criados: ${userCreated.rowCount}`).status(201);
  } catch (err) {
    next(err);
  }
}

async function signin(req: Request, res: Response, next: NextFunction) {
  const loginUser = req.body as t.UserRaw;
  try {
    const token = await userServices.signin(loginUser);
    return res.send({ token });
  } catch (err) {
    next(err);
  }
}

export default {
  create,
  signin,
};
