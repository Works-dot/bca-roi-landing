const BASE = "/api";

const TOKEN_KEY = "bca_admin_token";

export function getStoredToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function setStoredToken(token: string): void {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearStoredToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}

function authHeaders(): Record<string, string> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const token = getStoredToken();
  if (token) headers["Authorization"] = `Bearer ${token}`;
  return headers;
}

export async function login(username: string, password: string): Promise<string> {
  const res = await fetch(`${BASE}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Login failed");
  }
  const data = await res.json();
  setStoredToken(data.token);
  return data.token;
}

export async function fetchContent(): Promise<Record<string, string>> {
  const res = await fetch(`${BASE}/content`);
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
}

export async function updateContent(entries: { key: string; value: string }[]): Promise<void> {
  const res = await fetch(`${BASE}/content`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify({ entries }),
  });
  if (res.status === 401) {
    clearStoredToken();
    throw new Error("Session expired");
  }
  if (!res.ok) throw new Error("Failed to update content");
}

export async function fetchConstants(): Promise<Record<string, unknown>> {
  const res = await fetch(`${BASE}/constants`);
  if (!res.ok) throw new Error("Failed to fetch constants");
  return res.json();
}

export async function updateConstants(entries: { key: string; value: unknown }[]): Promise<void> {
  const res = await fetch(`${BASE}/constants`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify({ entries }),
  });
  if (res.status === 401) {
    clearStoredToken();
    throw new Error("Session expired");
  }
  if (!res.ok) throw new Error("Failed to update constants");
}

export async function submitContact(data: { name: string; email: string; company: string }): Promise<unknown> {
  const res = await fetch(`${BASE}/submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to submit contact form");
  return res.json();
}

export async function fetchSubmissions(): Promise<Array<{
  id: number;
  name: string;
  email: string;
  company: string;
  createdAt: string;
}>> {
  const token = getStoredToken();
  const headers: Record<string, string> = {};
  if (token) headers["Authorization"] = `Bearer ${token}`;
  const res = await fetch(`${BASE}/submissions`, { headers });
  if (res.status === 401) {
    clearStoredToken();
    throw new Error("Session expired");
  }
  if (!res.ok) throw new Error("Failed to fetch submissions");
  return res.json();
}
