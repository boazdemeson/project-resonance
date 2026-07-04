import { z } from 'zod';

export const createSessionSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  ownerId: z.string().min(1, 'ownerId is required'),
});