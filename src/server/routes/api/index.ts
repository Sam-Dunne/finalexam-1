import { Router } from 'express';
import booksRouter from './books';
import usersRouter from './users';
import categoriesRouter from './categories';

const router = Router();


router.use('/categories', categoriesRouter )
router.use('/users', usersRouter )
router.use('/books', booksRouter )



export default router;