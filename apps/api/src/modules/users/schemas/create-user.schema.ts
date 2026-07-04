// apps/api/src/modules/users/schemas/create-user.schema.ts
import { z } from 'zod';

export const createUserSchema = z.object({
  email: z.string().email(),
  name: z.string().optional(),
});