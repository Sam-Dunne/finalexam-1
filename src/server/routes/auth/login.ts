import { Router } from 'express';
import { authenticate } from 'passport';
import { createToken } from '../../utils/tokens'
import { IReqUser } from '../../../typings/intefaces';


const router = Router();


router.post('/', authenticate('local'), async (req: IReqUser, res, next) => {
    try {
        const token = createToken({ userid: req.user.id, email: req.user.email, role: req.user.role })
        res.json(token)
    } catch (error) {
        res.json(error)
    }
});

export default router;