import { apiGet, apiPost } from "./apiClient";

export type Session = {
  id: string;
  title: string;
  description: string | null;
  ownerId: string;
  isArchived: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export async function listSessions(ownerId: string) {
  const qs = new URLSearchParams({ ownerId });
  return apiGet<Session[]>(`/sessions?${qs.toString()}`);
}

export async function createSession(payload: {
  title: string;
  description?: string;
  ownerId: string;
}) {
  return apiPost<Session>("/sessions", payload);
}