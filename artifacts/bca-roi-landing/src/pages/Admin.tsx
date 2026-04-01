import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  fetchContent,
  updateContent,
  fetchConstants,
  updateConstants,
  fetchSubmissions,
} from "@/lib/api";

type Tab = "content" | "constants" | "submissions";

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string;
  createdAt: string;
}

const CONTENT_GROUPS: Record<string, string[]> = {
  Hero: [
    "hero.headline",
    "hero.subheadline",
    "hero.checklist.1",
    "hero.checklist.2",
    "hero.checklist.3",
    "hero.cta",
  ],
  Service: [
    "service.label",
    "service.quote",
    "service.intro",
    "service.bullet.1",
    "service.bullet.2",
    "service.bullet.3",
  ],
  "Value Pillars": [
    "pillars.title",
    "pillars.1.title",
    "pillars.1.description",
    "pillars.2.title",
    "pillars.2.description",
    "pillars.3.title",
    "pillars.3.description",
    "pillars.4.title",
    "pillars.4.description",
  ],
  Calculator: ["calculator.title"],
  "Example ROI": [
    "example.title",
    "example.manual.title",
    "example.manual.hours",
    "example.manual.rate",
    "example.manual.cost",
    "example.automation.title",
    "example.automation.setup",
    "example.automation.service",
    "example.impact.title",
    "example.impact.savings",
    "example.impact.payback",
    "example.impact.roi",
    "example.footer",
  ],
  Pricing: [
    "pricing.title",
    "pricing.starter.name",
    "pricing.starter.description",
    "pricing.starter.setup",
    "pricing.starter.annual",
    "pricing.growth.name",
    "pricing.growth.description",
    "pricing.growth.setup",
    "pricing.growth.annual",
    "pricing.scale.name",
    "pricing.scale.description",
    "pricing.scale.setup",
    "pricing.scale.annual",
    "pricing.note",
  ],
  "Final CTA": ["cta.headline", "cta.subheadline", "cta.button"],
  Footer: ["footer.brand", "footer.copyright"],
};

function prettyKey(key: string): string {
  return key
    .split(".")
    .slice(1)
    .join(" > ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function getAdminKey(): string {
  const params = new URLSearchParams(window.location.search);
  return params.get("key") || "";
}

export default function Admin() {
  const [tab, setTab] = useState<Tab>("content");
  const [content, setContent] = useState<Record<string, string>>({});
  const [constants, setConstants] = useState<Record<string, unknown>>({});
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [dirty, setDirty] = useState<Record<string, string>>({});
  const [dirtyConstants, setDirtyConstants] = useState<Record<string, string>>({});
  const adminKey = getAdminKey();

  useEffect(() => {
    setLoading(true);
    setMessage(null);
    if (tab === "content") {
      fetchContent()
        .then((c) => {
          setContent(c);
          setDirty({});
        })
        .catch(() => setMessage("Failed to load content"))
        .finally(() => setLoading(false));
    } else if (tab === "constants") {
      fetchConstants()
        .then((c) => {
          setConstants(c);
          setDirtyConstants({});
        })
        .catch(() => setMessage("Failed to load constants"))
        .finally(() => setLoading(false));
    } else {
      fetchSubmissions(adminKey)
        .then(setSubmissions)
        .catch(() => setMessage("Failed to load submissions"))
        .finally(() => setLoading(false));
    }
  }, [tab]);

  const handleContentChange = (key: string, value: string) => {
    setDirty((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveContent = async () => {
    const entries = Object.entries(dirty).map(([key, value]) => ({ key, value }));
    if (entries.length === 0) return;
    setSaving(true);
    setMessage(null);
    try {
      await updateContent(entries, adminKey);
      setContent((prev) => ({ ...prev, ...dirty }));
      setDirty({});
      setMessage("Content saved successfully.");
    } catch {
      setMessage("Failed to save content.");
    } finally {
      setSaving(false);
    }
  };

  const handleConstantChange = (key: string, value: string) => {
    setDirtyConstants((prev) => ({ ...prev, [key]: value }));
  };

  const handleSaveConstants = async () => {
    const entries: { key: string; value: unknown }[] = [];
    for (const [key, raw] of Object.entries(dirtyConstants)) {
      try {
        entries.push({ key, value: JSON.parse(raw) });
      } catch {
        setMessage(`Invalid JSON for "${key}".`);
        return;
      }
    }
    if (entries.length === 0) return;
    setSaving(true);
    setMessage(null);
    try {
      await updateConstants(entries, adminKey);
      for (const e of entries) {
        setConstants((prev) => ({ ...prev, [e.key]: e.value }));
      }
      setDirtyConstants({});
      setMessage("Constants saved successfully.");
    } catch {
      setMessage("Failed to save constants.");
    } finally {
      setSaving(false);
    }
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "content", label: "Content" },
    { id: "constants", label: "Calculator Constants" },
    { id: "submissions", label: "Submissions" },
  ];

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-foreground text-background py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-widest uppercase">BCA Admin</h1>
          <a href="/" className="text-sm text-background/60 hover:text-background transition-colors">
            Back to site
          </a>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-8 border-b border-border">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-6 py-3 font-bold text-sm uppercase tracking-wider transition-colors cursor-pointer ${
                tab === t.id
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {message && (
          <div
            className={`mb-6 px-4 py-3 text-sm font-medium rounded ${
              message.includes("Failed") || message.includes("Invalid")
                ? "bg-red-100 text-red-800"
                : "bg-green-100 text-green-800"
            }`}
          >
            {message}
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-muted-foreground">Loading...</div>
        ) : tab === "content" ? (
          <div className="space-y-10">
            {Object.entries(CONTENT_GROUPS).map(([group, keys]) => (
              <div key={group} className="bg-card border border-border p-6 space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wider text-foreground border-b border-border pb-2">
                  {group}
                </h2>
                {keys.map((key) => {
                  const current = dirty[key] ?? content[key] ?? "";
                  const isLong = current.length > 80;
                  return (
                    <div key={key} className="space-y-1">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                        {prettyKey(key)}
                      </label>
                      {isLong ? (
                        <Textarea
                          value={current}
                          onChange={(e) => handleContentChange(key, e.target.value)}
                          className="bg-background border-border rounded-none min-h-[80px]"
                        />
                      ) : (
                        <Input
                          value={current}
                          onChange={(e) => handleContentChange(key, e.target.value)}
                          className="bg-background border-border rounded-none"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
            <div className="flex justify-end">
              <Button
                onClick={handleSaveContent}
                disabled={saving || Object.keys(dirty).length === 0}
                className="h-12 px-10 text-sm font-bold uppercase tracking-widest rounded-none"
              >
                {saving ? "Saving..." : `Save Changes (${Object.keys(dirty).length})`}
              </Button>
            </div>
          </div>
        ) : tab === "constants" ? (
          <div className="space-y-6">
            <div className="bg-card border border-border p-6 space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-foreground border-b border-border pb-2">
                Calculator Constants
              </h2>
              <p className="text-sm text-muted-foreground">
                Values are stored as JSON. Edit carefully.
              </p>
              {Object.entries(constants).map(([key, value]) => {
                const current = dirtyConstants[key] ?? JSON.stringify(value, null, 2);
                return (
                  <div key={key} className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {key}
                    </label>
                    <Textarea
                      value={current}
                      onChange={(e) => handleConstantChange(key, e.target.value)}
                      className="bg-background border-border rounded-none font-mono text-sm min-h-[60px]"
                    />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleSaveConstants}
                disabled={saving || Object.keys(dirtyConstants).length === 0}
                className="h-12 px-10 text-sm font-bold uppercase tracking-widest rounded-none"
              >
                {saving ? "Saving..." : `Save Constants (${Object.keys(dirtyConstants).length})`}
              </Button>
            </div>
          </div>
        ) : (
          <div className="bg-card border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">ID</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Company</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {submissions.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="text-center py-12 text-muted-foreground">
                        No submissions yet.
                      </td>
                    </tr>
                  ) : (
                    submissions.map((s) => (
                      <tr key={s.id} className="hover:bg-muted/50">
                        <td className="px-6 py-4 text-sm text-foreground">{s.id}</td>
                        <td className="px-6 py-4 text-sm font-medium text-foreground">{s.name}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{s.email}</td>
                        <td className="px-6 py-4 text-sm text-foreground">{s.company}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(s.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
