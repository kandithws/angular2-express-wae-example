import { Router } from 'express';

import { Quotation } from '../models/quotation';
import { authenticated } from '../middlewares/authenticated';

export const router = Router();

router.get('/', async (req, res, next) => {
  const quotations = await Quotation.find();
  res.json(quotations);
});

router.get('/:id', async (req, res, next) => {
  const quotation = await Quotation.findById(req.params.id);
  res.json(quotation);
});

router.post('/', authenticated, async (req, res, next) => {
  const quote = req.body.quote;

  try {
    const quotation = await Quotation.create({ quote });
    res.json(quotation);
  } catch (err) {
    next(err);
  }
});
