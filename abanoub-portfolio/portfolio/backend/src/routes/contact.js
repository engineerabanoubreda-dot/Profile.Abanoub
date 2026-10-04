import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { sendContact } from '../controllers/contactController.js';
const router = Router();
router.post('/', rateLimit({ windowMs: 15 * 60 * 1000, limit: 5, standardHeaders: true, legacyHeaders: false, message: { error: 'Too many messages. Try again later.' } }), sendContact);
export default router;
