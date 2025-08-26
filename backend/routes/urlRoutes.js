import express from 'express';
import { createShortUrl } from '../controllers/urlController.js';

const router = express.Router();

router.post('/', createShortUrl); // ✅ handles POST /api/url
router.get('/:shortId', redirectUrl);


export default router;

