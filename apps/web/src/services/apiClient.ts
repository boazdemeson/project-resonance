const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ?? "http://localhost:4000/api/v1";

type ApiErrorShape = {
  success: false;
  error: { code?: string; message: string };
};

type ApiSuccessShape<T> = {
  success: true;
  data: T;
};

export async function apiGet<T>(path: string): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`);
  const json = (await res.json()) as ApiSuccessShape<T> | ApiErrorShape;

  if (!res.ok || (json as any).success === false) {
    const msg = (json as any).success === false ? (json as ApiErrorShape).error.message : "API request failed";
    throw new Error(msg);
  }

  return (json as ApiSuccessShape<T>).data;
}

export async function apiPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = (await res.json()) as ApiSuccessShape<T> | ApiErrorShape;

  if (!res.ok || (json as any).success === false) {
    const msg = (json as any).success === false ? (json as ApiErrorShape).error.message : "API request failed";
    throw new Error(msg);
  }

  return (json as ApiSuccessShape<T>).data;
}

export async function apiDelete(path: string): Promise<void> {
  const res = await fetch(`${API_BASE}${path}`, { method: "DELETE" });
  const json = (await res.json()) as ApiSuccessShape<unknown> | ApiErrorShape;

  if (!res.ok || (json as any).success === false) {
    const msg = (json as any).success === false ? (json as ApiErrorShape).error.message : "API request failed";
    throw new Error(msg);
  }
}

export async function apiPatch<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  const json = (await res.json()) as ApiSuccessShape<T> | ApiErrorShape;
  if (!res.ok || (json as any).success === false) {
    const msg = (json as any).success === false ? (json as ApiErrorShape).error.message : 'API request failed';
    throw new Error(msg);
  }
  return (json as ApiSuccessShape<T>).data;
}