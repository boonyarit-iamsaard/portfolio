'use server';

import { env } from '@/core/configs/env.config';
import { createMailer } from '@/core/email';
import { actionClient } from '@/core/safe-action';

import { sendMessageSchema } from '../validators/send-message';

export const sendMessageAction = actionClient
  .schema(sendMessageSchema)
  .action(async ({ parsedInput }) => {
    const { name, email, message } = parsedInput;

    const mailer = createMailer();
    try {
      await mailer.send({
        // TODO: reconsider from email format
        from: env.MAIL_FROM_ADDRESS,
        to: env.MAIL_TO_ADDRESS,
        subject: `Message from ${name}`,
        html: `Here is the message:<br><br>${message}<br><br>from: ${email}`,
      });

      return {
        success: true,
        message: 'Message sent successfully',
      };
    } catch (error) {
      // TODO: log error
      console.error('Failed to send message: ', JSON.stringify(error, null, 2));

      throw new Error('Failed to send message');
    }
  });
