import { Router } from 'express';
import db from '../../db';


const router = Router();


router.get('/', async (req, res, next) => {
   
    try {
        const [allUsers] = await db.users.all()
        res.json(allUsers);
        
    } catch (error) {
        res.json(error)
    }
});

router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const [user]= await db.users.one(id)

        res.json(user);
        
    } catch (error) {
        res.json(error)
    }
});


// router.put('/:id', (req, res, next) => {
//     const id = req.params.id;
//     const allBooks = req.body;
//     try {

//         res.json('test books');
        
//     } catch (error) {
//         res.json(error)
//     }
// });
// router.delete('/:id', (req, res, next) => {
//     const id = req.params.id;
//     const allBooks = req.body;
//     try {

//         res.json('test books');
        
//     } catch (error) {
//         res.json(error)
//     }
// });



export default router;