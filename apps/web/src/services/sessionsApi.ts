import { apiGet, apiPost, apiPatch, apiDelete } from "./apiClient";

export type Session = {
  id: string;
  title: string;
  description: string | null;
  ownerId: string;
  createdAt: string;
  updatedAt: string;
};

export async function listSessions(ownerId: string) {
  return apiGet<Session[]>(`/sessions?ownerId=${encodeURIComponent(ownerId)}`);
}

export async function createSession(input: {
  ownerId: string;
  title: string;
  description?: string;
}) {
  return apiPost<Session>("/sessions", input);
}

export async function updateSession(
  id: string,
  input: { title?: string; description?: string }
) {
  return apiPatch<Session>(`/sessions/${id}`, input);
}

export async function deleteSession(id: string) {
  return apiDelete(`/sessions/${id}`);
}