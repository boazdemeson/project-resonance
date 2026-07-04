import { apiGet, apiPost } from "./apiClient";

export type Snapshot = {
  id: string;
  sessionId: string;
  createdBy: string;
  createdAt: string;
  data: unknown;
  note: string | null;
  immutable: boolean;
};

export async function listSnapshots(sessionId: string) {
  const qs = new URLSearchParams({ sessionId });
  return apiGet<Snapshot[]>(`/snapshots?${qs.toString()}`);
}

export async function createSnapshot(payload: {
  sessionId: string;
  createdBy: string;
  note?: string;
  data: unknown;
}) {
  return apiPost<Snapshot>("/snapshots", payload);
}