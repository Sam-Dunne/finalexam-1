import { Router } from 'express';
import { generateHash } from '../../utils/passwords';
import { createToken } from '../../utils/tokens'
import db from '../../db'
import { IReqUser } from '../../../typings/intefaces';

const router = Router();


router.post('/', async (req: IReqUser, res, next) => {
    const newUser = req.body;

    try {
        
        newUser.password = generateHash(newUser.password);
        const result = await db.users.insert(newUser);

        const token = createToken({ userid: result.insertId, email: newUser.email, role: newUser.role })
        res.json(token);
    } catch (error) {
        res.json(error)
    }
});

export default router;