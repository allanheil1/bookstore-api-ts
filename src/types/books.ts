import { QueryResult } from 'pg';

export type BookRaw = {
    id?: number,
    name: string,
    author: string,
    available?: boolean,
    userId?: number
}