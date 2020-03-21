import * as nodemailer from 'nodemailer';
import { MailOptions } from 'nodemailer/lib/smtp-transport';

const fromEmailAddress = 'info@reallygoodsoftware.llc';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

export const sendEmail = (to: string, subject: string, html: string) => {
  const opts: MailOptions = {
    to,
    from: fromEmailAddress,
    subject,
    html
  };

  return transporter.sendMail(opts);
};
