import { Router } from 'express';
import { authenticate } from 'passport';
import { IReqPayload } from '../../../typings/intefaces';
import db from '../../db';


const router = Router();


router.get('/', async (req, res, next) => {
    try {
        const allBooks = await db.books.all()

        res.json(allBooks);
        
    } catch (error) {
        res.json(error)
    }
});

router.post('/', authenticate('jwt'), async (req: IReqPayload, res, next) => {
    const { categoryid, title, author, price } = req.body;
    
    try {
        const result = await db.books.insert({ categoryid, title, author, price })
        res.json(result)
        
    } catch (error) {
        res.json(error)
    }
});

router.get('/:id',  async (req, res, next) => {
    const id = req.params.id;
   
    try {
        const [oneBook] = await db.books.one(id)
        res.json(oneBook);
        
    } catch (error) {
        res.json(error)
    }
});

router.put('/:id', authenticate('jwt'), async (req, res, next) => {
    const updatedBook = req.body;
    const id = req.params.id;
    try {
        const result = await db.books.update(updatedBook, id)

        res.json(result);
        
    } catch (error) {
        res.json(error)
    }
});

router.delete('/:id', authenticate('jwt'), async (req: IReqPayload, res, next) => {
    const id = req.params.id;
    
    try {
        const result = await db.books.nuke(id)
        res.json(result);
        
    } catch (error) {
        res.json(error)
    }
});



export default router;