import * as express from 'express';
import { FormContents } from '../../../app/contact/contact.component';
import { check, body, validationResult} from 'express-validator';

const router = express.Router();

const validators = [
  check('email').isEmail().notEmpty().exists().isLength({ min: 5 }),
  check('name').isString().notEmpty().exists().isLength({ min: 1 }).matches(/[A-Za-z]+ [A-Za-z]+/),
  check('phone').isString().matches(/[2-9]\d{2}-\d{3}-\d{4}/).optional(),
  check('message').isString().notEmpty().exists().isLength({ min: 1 })
];

const sanitizers = [
  body('email').normalizeEmail(),
  body('name').trim().escape(),
  body('phone').trim().escape().optional(),
  body('message').trim().escape()
];

router.post('/', validators, sanitizers, (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const body = req.body as FormContents;
  return res.status(200).send(body);
});

export const contactRouter = router;
