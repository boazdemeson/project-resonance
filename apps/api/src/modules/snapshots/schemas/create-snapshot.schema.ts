import { z } from 'zod';

export const createSnapshotSchema = z.object({
  sessionId: z.string().min(1, 'sessionId is required'),
  createdBy: z.string().min(1, 'createdBy is required'),
  note: z.string().optional(),
  data: z.unknown(), // later we can tighten this to a strict schema
});