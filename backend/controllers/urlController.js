import Url from '../models/Url.js';
import { nanoid } from 'nanoid';

export const redirectUrl = async (req, res) => {
  const { shortId } = req.params;
  const urlDoc = await Url.findOne({ shortId });

  if (!urlDoc) return res.status(404).send('URL not found');
  res.redirect(urlDoc.originalUrl);
};

export const createShortUrl = async (req, res) => {
  const { originalUrl } = req.body;
  const shortId = nanoid(8);

  try {
    const newUrl = new Url({ originalUrl, shortId });
    await newUrl.save();

    res.status(201).json({
      shortUrl: `http://localhost:5000/${shortId}`,
      originalUrl,
      shortId,
    });
  } catch (error) {
    console.error('Error saving URL:', error); // 👈 helpful for debugging
    res.status(500).json({ error: 'Failed to create short URL' });
  }
};