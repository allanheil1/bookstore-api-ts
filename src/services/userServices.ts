import bcrypt, { hash } from "bcrypt";
import userRepositories from "../repositories/userRepositories.js";
import { v4 as uuidV4 } from "uuid";
import * as t from "../protocols/types.js";
import errors from "../errors/index.js";

async function create(newUser: t.UserRaw) {
  const { rowCount } = await userRepositories.findByEmail(newUser.email);
  if (rowCount) throw errors.duplicatedEmailError(newUser.email);

  const hashPassword = await bcrypt.hash(newUser.password, 10);
  newUser.password = hashPassword;
  const userCreated = await userRepositories.create(newUser);
  return userCreated;
}

async function signin(loginUser: t.UserRaw) {
  const {
    rowCount,
    rows: [user],
  } = await userRepositories.findByEmail(loginUser.email);
  if (!rowCount) throw errors.invalidCredentialsError();

  const validPassword = await bcrypt.compare(loginUser.password, user.password);
  if (!validPassword) throw errors.invalidCredentialsError();

  const token = uuidV4();
  await userRepositories.createSession({ token, userId: user.id });

  return token;
}

export default {
  create,
  signin,
};
