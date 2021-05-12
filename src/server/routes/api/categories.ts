import { Router } from 'express';
import db from '../../db';


const router = Router();


router.get('/', async (req, res, next) => {
    // const allCategories = req.body;
    try {
        const allCategories = await db.categories.all()
        res.json(allCategories);
        
    } catch (error) {
        res.json(error)
    }
});


router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
   
    try {
        const oneCategory = await db.categories.one(id);
        res.json(oneCategory);
        
    } catch (error) {
        res.json(error)
    }
});

router.post('/', (req, res, next) => {
    const newCategory = req.body;
    try {

        res.json('test new cat');
        
    } catch (error) {
        res.json(error)
    }
});

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const allBooks = req.body;
    try {

        res.json('test books');
        
    } catch (error) {
        res.json(error)
    }
});

router.delete('/:id', (req, res, next) => {
    const id = req.params.id;
    const allBooks = req.body;
    try {

        res.json('test books');
        
    } catch (error) {
        res.json(error)
    }
});



export default router;