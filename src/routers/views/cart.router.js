import { Router } from 'express';
import CartManager from '../../dao/CartManager';

const router = Router();

router.get('/carts', async (req, res) => {
    let carts = await CartManager.get();
    res.render('carts', { carts: carts.map(cart => cart.toJSON()) });
});

export default router;
