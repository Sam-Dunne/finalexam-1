import * as mysql from 'mysql';
import { MySQLResponse } from '../../typings/intefaces';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'finalexam',
    password: 'finalexam',
    database: 'finalexam'
});

export const Query = <T = MySQLResponse>(query: string, values?: any) => {
    return new Promise<T>((resolve, reject) => {
        pool.query(query, values, (err, results) => {
            if (err) {
                reject(err)
            } else {
                resolve(results)
            }
        })
    })
}

import books from './queries/books'
import users from './queries/users'
import categories from './queries/categories'

export default {
    books,
    users,
    categories
}