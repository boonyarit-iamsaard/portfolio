import nodemailer from 'nodemailer';

import { env } from '@/core/configs/env.config';

export type SendOptions = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export function createMailer() {
  const transporter = nodemailer.createTransport({
    host: env.MAIL_HOST,
    secure: env.NODE_ENV === 'production',
    port: env.MAIL_PORT,
    auth: {
      user: env.MAIL_USER,
      pass: env.MAIL_PASSWORD,
    },
  });

  async function send({ from, to, subject, html }: SendOptions) {
    return await transporter.sendMail({
      from,
      to,
      subject,
      html,
    });
  }

  return {
    send,
  };
}
