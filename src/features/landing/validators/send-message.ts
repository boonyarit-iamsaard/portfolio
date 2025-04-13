import { z } from 'zod';

export const sendMessageSchema = z.object({
  name: z
    .string({
      required_error: 'Please enter your name',
      invalid_type_error: 'Please enter a valid name',
    })
    .nonempty('Please enter your name'),
  email: z
    .string({
      required_error: 'Please enter your email',
      invalid_type_error: 'Please enter a valid email',
    })
    .email('Please enter a valid email'),
  message: z.string({
    required_error: 'Please enter a message',
    invalid_type_error: 'Please enter a valid message',
  }),
});
