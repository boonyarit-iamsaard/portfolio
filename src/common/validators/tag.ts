import { z } from 'zod';

export const tagSchema = z
  .string()
  .toLowerCase()
  .transform((tag) => tag.replace(/\s/g, ''));

export const tagsParamSchema = z.object({
  tags: z.union([tagSchema, z.array(tagSchema)]).optional(),
});
