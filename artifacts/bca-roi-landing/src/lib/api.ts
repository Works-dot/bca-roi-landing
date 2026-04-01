const BASE = "/api";

function adminHeaders(adminKey?: string): Record<string, string> {
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (adminKey) headers["x-admin-key"] = adminKey;
  return headers;
}

export async function fetchContent(): Promise<Record<string, string>> {
  const res = await fetch(`${BASE}/content`);
  if (!res.ok) throw new Error("Failed to fetch content");
  return res.json();
}

export async function updateContent(entries: { key: string; value: string }[], adminKey?: string): Promise<void> {
  const res = await fetch(`${BASE}/content`, {
    method: "PUT",
    headers: adminHeaders(adminKey),
    body: JSON.stringify({ entries }),
  });
  if (!res.ok) throw new Error("Failed to update content");
}

export async function fetchConstants(): Promise<Record<string, unknown>> {
  const res = await fetch(`${BASE}/constants`);
  if (!res.ok) throw new Error("Failed to fetch constants");
  return res.json();
}

export async function updateConstants(entries: { key: string; value: unknown }[], adminKey?: string): Promise<void> {
  const res = await fetch(`${BASE}/constants`, {
    method: "PUT",
    headers: adminHeaders(adminKey),
    body: JSON.stringify({ entries }),
  });
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

export async function fetchSubmissions(adminKey?: string): Promise<Array<{
  id: number;
  name: string;
  email: string;
  company: string;
  createdAt: string;
}>> {
  const headers: Record<string, string> = {};
  if (adminKey) headers["x-admin-key"] = adminKey;
  const res = await fetch(`${BASE}/submissions`, { headers });
  if (!res.ok) throw new Error("Failed to fetch submissions");
  return res.json();
}
