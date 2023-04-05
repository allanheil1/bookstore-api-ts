import { QueryResult } from 'pg';

export type BookRaw = {
    id?: number,
    name: string,
    author: string,
    available?: boolean,
    userId?: number
}

export type UserRaw = {
    id?: number,
    name: string;
    email: string;
    password: string;
}

export type MyBooks = {
    user_name: string,
    book_name: string,
    book_author: string
}

export type findAllBooks = {
    id: number,
    name: string,
    author: string,
    available: boolean,
    created_by: string
}

export type FindSession = {
    id: number,
    token: string,
    userId: number
}