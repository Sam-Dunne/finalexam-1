import { IUsers } from '../../../typings/intefaces';
import {Query} from '../index';

const all = () => Query<IUsers[]>('SELECT * FROM users')
const one = (id: string) => Query<IUsers[]>('SELECT * FROM users WHERE id = ?', [id])
const insert = (newUser: IUsers) => Query('INSERT INTO users SET ?', [newUser])
const update = () => Query('', [])
const nuke = () => Query('', [])
const find = (column: string, value: string) => Query<IUsers[]>('SELECT * FROM users WHERE ?? = ?', [column, value])


export default {
    all,
    one,
    insert,
    update,
    nuke,
    find
}