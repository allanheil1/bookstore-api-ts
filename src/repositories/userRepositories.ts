import connectionDb from "../config/database.js";
import { QueryResult } from 'pg';
import * as t from "../protocols/types.js"

async function findByEmail(email: string): Promise<QueryResult<t.UserRaw>> {
  return await connectionDb.query(
    `    
    SELECT * FROM users WHERE email=$1
  `,
    [email]
  );
}

async function create(newUser: t.UserRaw): Promise<QueryResult>  {
  return await connectionDb.query(
    `
        INSERT INTO users (name, email, password)
        VALUES ($1, $2, $3)
    `,
    [newUser.name, newUser.email, newUser.password]
  );
}

async function createSession({ token, userId }): Promise<QueryResult>  {
  return await connectionDb.query(
    `
        INSERT INTO sessions (token, "userId")
        VALUES ($1, $2)
    `,
    [token, userId]
  );
}

async function findSessionByToken(token: string): Promise<QueryResult<t.FindSession>> {
  return await connectionDb.query(
    `
        SELECT * FROM sessions WHERE token = $1
    `,
    [token]
  );
}

async function findById(id: number): Promise<QueryResult<t.UserRaw>> {
  return await connectionDb.query(
    `    
    SELECT * FROM users WHERE id=$1
  `,
    [id]
  );
}

export default {
  findByEmail,
  create,
  createSession,
  findById,
  findSessionByToken,
};
