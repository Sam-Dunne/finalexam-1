import { ICategories } from '../../../typings/intefaces';
import {Query} from '../index';

const all = () => Query<ICategories[]>('SELECT * FROM categories')
const one = (id: string) => Query<ICategories>('SELECT * FROM categories WHERE id = ?', [id])
const insert = () => Query('', [])
const update = () => Query('', [])
const nuke = () => Query('', [])
const find = () => Query('', [])


export default {
    all,
    one,
    insert,
    update,
    nuke,
    find
}