export interface IBooks {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
};

export interface IUsers {
    id?: number;
    email?: string;
    password?: string;
    role?: string;
    _created?: Date;
    name?: string;
}
export interface ICategories {
    id?: number;
    name?: string;
};

export interface IBookFull {
    id?: number;
    categoryid?: number;
    title?: string;
    author?: string;
    price?: number;
    _created?: Date;
    name?: string;
};

export interface IPayload extends IUsers {
    userid?: number;
}

import {Request} from 'express';
// use for localstrategy in login
export interface IReqUser extends Request {
    user?: IPayload;
}
//use for JWT
export interface IReqPayload extends Request {
    user?: {
        userid?: number;
        email?: string;
        role?: string;
    }
}

export interface MySQLResponse {
    affectedRows: number;
    insertId: number;
    sqlMessage?: string;
    sql?: string;
}