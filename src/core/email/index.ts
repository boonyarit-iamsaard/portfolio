import nodemailer from 'nodemailer';

import { env } from '@/core/configs/env.config';

export async function send() {
  const transporter = nodemailer.createTransport({
    host: env.MAIL_HOST,
    secure: env.NODE_ENV === 'production',
    port: env.MAIL_PORT,
    auth: {
      user: env.MAIL_USER,
      pass: env.MAIL_PASSWORD,
    },
  });

  const info = await transporter.sendMail({
    from: env.MAIL_FROM_ADDRESS,
    to: 'contact@boonyarit.me',
    subject: 'Test email',
    html: '<strong>Test email</strong>',
  });

  console.log('Message sent: %s', info.messageId);
}
