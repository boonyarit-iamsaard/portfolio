import { z } from 'velite';

/**
 * Import 'z' from 'velite' for compatibility with tags in Velite configuration
 * and Zod validation. This ensures consistent schema definitions across the project.
 */
export const tagSchema = z
  .string()
  .toLowerCase()
  .transform((tag) => tag.replace(/\s/g, ''));
