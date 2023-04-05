import bookServices from "../services/bookServices.js";
import { Request, Response, NextFunction } from 'express';
import * as t from "../protocols/types.js";

async function create(req: Request, res: Response, next: NextFunction) {
  const newBook = req.body as t.BookRaw;
  newBook.userId =  res.locals.user.id as number;
  try {
    const bookCreated = await bookServices.create(newBook);
    return res.send(`Livros criados: ${bookCreated.rowCount}`).status(201);
  } catch (err) {
    next(err);
  }
}

async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const allbooks = await bookServices.findAll();

    return res.send(allbooks);
  } catch (err) {
    next(err);
  }
}

async function takeBook(req: Request, res: Response, next: NextFunction) {
  const id = res.locals.user as number;
  const bookId = +req.params.id as number;
  try {
    await bookServices.takeBook(id, bookId);
    return res.sendStatus(201);
  } catch (err) {
    next(err);
  }
}

async function findAllMyBooks(req: Request, res: Response, next: NextFunction) {
  const id  = res.locals.user as number;
  try {
    const books = await bookServices.findAllMyBooks(id);
    return res.send(books);
  } catch (err) {
    next(err);
  }
}
export default { create, findAll, takeBook, findAllMyBooks };
