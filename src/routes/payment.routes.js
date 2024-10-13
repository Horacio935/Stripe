import {Router} from "express";
import {createSession} from '../controllers/payment.controller.js'

const router = Router();

router.get('/create-checkout-session', createSession);
router.get('/success', (req,res) => res.send("Compra exitosa! Feliz dia!"));
router.get('/cancel', (req,res) => res.send("Compra cancelada :("));

export default router;