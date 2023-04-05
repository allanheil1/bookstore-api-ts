import errors from "../errors/index.js";
import bookRepositories from "../repositories/bookRepositories.js";
import * as t from "../protocols/types.js";

async function create(newBook: t.BookRaw) {
  const {
    rows: [book],
  } = await bookRepositories.findByName(newBook.name);
  if (book) throw errors.conflictError("Book already exists");
  const bookCreated = await bookRepositories.create(newBook);
  return bookCreated;
}

async function findAll() {
  const allbooks = await bookRepositories.findAll();
  if (!allbooks.rowCount) throw errors.notFoundError();
  return allbooks.rows;
}

async function takeBook(userId: number, bookId: number) {
  const {
    rows: [book],
    rowCount,
  } = await bookRepositories.findById(bookId);
  if (!rowCount) throw errors.notFoundError();
  if (!book.available) throw errors.conflictError("Book not available");
  await bookRepositories.updateStatusBook(false, bookId);
  await bookRepositories.takeBook(userId, bookId);
}

async function findAllMyBooks(userId: number) {
  const mybooks = await bookRepositories.findAllMyBooks(userId);
  if (!mybooks.rowCount) throw errors.notFoundError();
  return mybooks.rows;
}

export default { create, findAll, takeBook, findAllMyBooks };
