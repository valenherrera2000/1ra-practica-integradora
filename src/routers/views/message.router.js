import { Router } from 'express';
import MessageManager from '../../dao/MessageManager';

const router = Router();

router.get('/messages', async (req, res) => {
    let messages = await MessageManager.get();
    res.render('messages', { messages: messages.map(message => message.toJSON()) });
});

export default router;
