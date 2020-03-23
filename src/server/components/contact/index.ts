import * as express from 'express';
import { FormContents } from '../../../app/contact/contact.component';
import { check, body, validationResult} from 'express-validator';
import { sendEmail } from './sendEmail';
import to from 'await-to-js';
import { buildReachOutHtml } from './buildReachOutHtml';

const router = express.Router();

const validators = [
  check('email').isEmail().notEmpty().exists().isLength({ min: 5 }),
  check('name').isString().notEmpty().exists().isLength({ min: 1 }).matches(/[A-Za-z]+ [A-Za-z]+/),
  check('phone').isString().matches(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/).optional(),
  check('message').isString().notEmpty().exists().isLength({ min: 1 })
];

const sanitizers = [
  body('email').normalizeEmail(),
  body('name').trim().escape(),
  body('phone').trim().escape().optional(),
  body('message').trim().escape()
];

router.post('/', validators, sanitizers, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({ errors: errors.array() });
  }

  const { phone, message, email, name } = req.body as FormContents;
  const html = buildReachOutHtml(name, email, message, phone);
  const [e] = await to(sendEmail('sales@reallygoodsoftware.llc', `New Message from ${body.name}`, html));
  if (e) {
    console.error(e);
    return res.status(500).send({ errors: [e.message] });
  }
  return res.status(200).json();
});

export const contactRouter = router;
