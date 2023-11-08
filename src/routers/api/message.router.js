import { Router } from 'express';
import MessageManager from '../../dao/MessageManager.js';

const router = Router();

router.get('/messages', async (req, res) => {
    const { query = {} } = req;
    const messages = await MessageManager.get(query);
    res.status(200).json(messages);
});

router.get('/messages/:messageId', async (req, res) => {
    try {
        const { params: { messageId } } = req;
        const message = await MessageManager.getById(messageId);
        res.status(200).json(message);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

router.post('/messages', async (req, res) => {
    const { body } = req;
    const newMessage = { ...body };
    const message = await MessageManager.create(newMessage);
    res.status(201).json(message);
});

router.put('/messages/:messageId', async (req, res) => {
    try {
        const { params: { messageId }, body } = req;
        await MessageManager.updateById(messageId, body);
        res.status(204).end();
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

router.delete('/messages/:messageId', async (req, res) => {
    try {
        const { params: { messageId } } = req;
        await MessageManager.deleteById(messageId);
        res.status(204).end();
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

export default router;
