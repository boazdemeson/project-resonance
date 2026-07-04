import { apiGet, apiPost, apiDelete } from "./apiClient";

export type User = {
  id: string;
  email: string;
  name: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export async function getUsers() {
  return apiGet<User[]>("/users");
}

export async function createUser(payload: { email: string; name?: string }) {
  return apiPost<User>("/users", payload);
}

export async function deleteUser(id: string) {
  return apiDelete(`/users/${id}`);
}