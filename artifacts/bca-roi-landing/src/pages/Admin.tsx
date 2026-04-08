import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  login,
  getStoredToken,
  clearStoredToken,
  verifyToken,
  fetchContent,
  updateContent,
  fetchConstants,
  updateConstants,
  fetchSubmissions,
  deleteSubmission,
  fetchAnalyticsStats,
} from "@/lib/api";
import { ICON_MAP } from "@/lib/icon-map";

type Tab = "content" | "constants" | "submissions" | "analytics" | "seo";

interface AnalyticsStats {
  calculatorUses: { total: number; today: number; thisWeek: number };
}

interface Submission {
  id: number;
  name: string;
  email: string;
  company: string;
  position: string | null;
  createdAt: string;
}

const ICON_OPTIONS = Object.keys(ICON_MAP);

const TEXTAREA_KEYS = new Set([
  "hero.subheadline",
  "service.quote",
  "service.intro",
  "service.bullet.1",
  "service.bullet.2",
  "service.bullet.3",
  "calculator.description",
  "pillars.1.description",
  "pillars.2.description",
  "pillars.3.description",
  "pillars.4.description",
  "example.footer",
  "pricing.note",
  "cta.subheadline",
  "footer.copyright",
]);

const ICON_KEYS = new Set([
  "pillars.1.icon",
  "pillars.2.icon",
  "pillars.3.icon",
  "pillars.4.icon",
]);

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
    "pillars.1.icon",
    "pillars.2.title",
    "pillars.2.description",
    "pillars.2.icon",
    "pillars.3.title",
    "pillars.3.description",
    "pillars.3.icon",
    "pillars.4.title",
    "pillars.4.description",
    "pillars.4.icon",
  ],
  "Process Complexity": [
    "complexity.headline",
    "complexity.subline",
    "complexity.small.name",
    "complexity.small.systems",
    "complexity.small.bullet.1",
    "complexity.small.bullet.2",
    "complexity.small.bullet.3",
    "complexity.medium.name",
    "complexity.medium.systems",
    "complexity.medium.bullet.1",
    "complexity.medium.bullet.2",
    "complexity.medium.bullet.3",
    "complexity.large.name",
    "complexity.large.systems",
    "complexity.large.bullet.1",
    "complexity.large.bullet.2",
    "complexity.large.bullet.3",
    "complexity.complex.name",
    "complexity.complex.systems",
    "complexity.complex.bullet.1",
    "complexity.complex.bullet.2",
    "complexity.complex.bullet.3",
  ],
  Calculator: ["calculator.title", "calculator.description"],
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
  Footer: [
    "footer.tagline",
    "footer.subtitle",
    "footer.social.facebook",
    "footer.social.linkedin",
    "footer.social.instagram",
    "footer.copyright",
    "footer.privacy.text",
    "footer.privacy.url",
  ],
};

function prettyKey(key: string): string {
  return key
    .split(".")
    .slice(1)
    .join(" > ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

interface PricingTier {
  setup: number;
  service: number;
}

interface StructuredConstants {
  pricingS: PricingTier;
  pricingM: PricingTier;
  pricingL: PricingTier;
  automationRatio: number;
  workingHoursPerMonth: number;
}

function parseConstants(constants: Record<string, unknown>): StructuredConstants {
  const pricing = (constants.pricing ?? {}) as Record<string, PricingTier>;
  return {
    pricingS: pricing.S ?? { setup: 5000, service: 3000 },
    pricingM: pricing.M ?? { setup: 10000, service: 5000 },
    pricingL: pricing.L ?? { setup: 17500, service: 7000 },
    automationRatio: ((constants.automationRatio as number) ?? 0.9) * 100,
    workingHoursPerMonth: (constants.workingHoursPerMonth as number) ?? 144,
  };
}

function toApiConstants(s: StructuredConstants): { key: string; value: unknown }[] {
  return [
    {
      key: "pricing",
      value: {
        S: { setup: s.pricingS.setup, service: s.pricingS.service },
        M: { setup: s.pricingM.setup, service: s.pricingM.service },
        L: { setup: s.pricingL.setup, service: s.pricingL.service },
      },
    },
    { key: "automationRatio", value: s.automationRatio / 100 },
    { key: "workingHoursPerMonth", value: s.workingHoursPerMonth },
  ];
}

function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      await login(username, password);
      onLogin();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-muted flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="bg-card border border-border p-8">
          <h1 className="text-xl font-bold tracking-widest uppercase text-center mb-2">
            BCA Admin
          </h1>
          <p className="text-sm text-muted-foreground text-center mb-8">
            Sign in to manage your site
          </p>

          {error && (
            <div className="mb-6 px-4 py-3 text-sm font-medium bg-red-100 text-red-800 rounded">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Username
              </Label>
              <Input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-background border-border rounded h-10"
                autoComplete="username"
                autoFocus
              />
            </div>
            <div className="space-y-1">
              <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Password
              </Label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-background border-border rounded h-10"
                autoComplete="current-password"
              />
            </div>
            <Button
              type="submit"
              disabled={loading || !username || !password}
              className="w-full h-12 text-sm font-bold uppercase tracking-widest rounded"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function AdminPanel({ onLogout }: { onLogout: () => void }) {
  const [tab, setTab] = useState<Tab>("content");
  const [content, setContent] = useState<Record<string, string>>({});
  const [constants, setConstants] = useState<Record<string, unknown>>({});
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [analyticsStats, setAnalyticsStats] = useState<AnalyticsStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [dirty, setDirty] = useState<Record<string, string>>({});
  const [structuredConstants, setStructuredConstants] = useState<StructuredConstants | null>(null);
  const [constantsDirty, setConstantsDirty] = useState(false);

  useEffect(() => {
    setLoading(true);
    setMessage(null);
    if (tab === "content" || tab === "seo") {
      fetchContent()
        .then((c) => {
          setContent(c);
          setDirty({});
        })
        .catch((err) => {
          if (err.message === "Session expired") onLogout();
          else setMessage("Failed to load content");
        })
        .finally(() => setLoading(false));
    } else if (tab === "constants") {
      fetchConstants()
        .then((c) => {
          setConstants(c);
          setStructuredConstants(parseConstants(c));
          setConstantsDirty(false);
        })
        .catch((err) => {
          if (err.message === "Session expired") onLogout();
          else setMessage("Failed to load constants");
        })
        .finally(() => setLoading(false));
    } else if (tab === "submissions") {
      fetchSubmissions()
        .then(setSubmissions)
        .catch((err) => {
          if (err.message === "Session expired") onLogout();
          else setMessage("Failed to load submissions");
        })
        .finally(() => setLoading(false));
    } else {
      fetchAnalyticsStats()
        .then(setAnalyticsStats)
        .catch((err) => {
          if (err.message === "Session expired") onLogout();
          else setMessage("Failed to load analytics");
        })
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
      await updateContent(entries);
      setContent((prev) => ({ ...prev, ...dirty }));
      setDirty({});
      setMessage("Content saved successfully.");
    } catch (err) {
      if (err instanceof Error && err.message === "Session expired") onLogout();
      else setMessage("Failed to save content.");
    } finally {
      setSaving(false);
    }
  };

  const handleConstantFieldChange = (path: string, value: number) => {
    setConstantsDirty(true);
    setStructuredConstants((prev) => {
      if (!prev) return prev;
      const next = { ...prev };
      if (path === "pricingS.setup") next.pricingS = { ...next.pricingS, setup: value };
      else if (path === "pricingS.service") next.pricingS = { ...next.pricingS, service: value };
      else if (path === "pricingM.setup") next.pricingM = { ...next.pricingM, setup: value };
      else if (path === "pricingM.service") next.pricingM = { ...next.pricingM, service: value };
      else if (path === "pricingL.setup") next.pricingL = { ...next.pricingL, setup: value };
      else if (path === "pricingL.service") next.pricingL = { ...next.pricingL, service: value };
      else if (path === "automationRatio") next.automationRatio = value;
      else if (path === "workingHoursPerMonth") next.workingHoursPerMonth = value;
      return next;
    });
  };

  const handleSaveConstants = async () => {
    if (!structuredConstants || !constantsDirty) return;
    setSaving(true);
    setMessage(null);
    try {
      const entries = toApiConstants(structuredConstants);
      await updateConstants(entries);
      setConstantsDirty(false);
      setMessage("Constants saved successfully.");
    } catch (err) {
      if (err instanceof Error && err.message === "Session expired") onLogout();
      else setMessage("Failed to save constants.");
    } finally {
      setSaving(false);
    }
  };

  const tabs: { id: Tab; label: string }[] = [
    { id: "content", label: "Content" },
    { id: "constants", label: "Calculator Constants" },
    { id: "seo", label: "SEO" },
    { id: "submissions", label: "Submissions" },
    { id: "analytics", label: "Analytics" },
  ];

  const SEO_FIELDS: { key: string; label: string; placeholder: string; multiline?: boolean }[] = [
    { key: "seo.title", label: "Page Title", placeholder: "BCA Solutions — Managed Intelligent Automation" },
    { key: "seo.description", label: "Meta Description", placeholder: "Deliver business process automation as a fully managed service...", multiline: true },
    { key: "seo.keywords", label: "Keywords", placeholder: "managed automation, RPA, business process..." },
    { key: "seo.ogTitle", label: "OG Title (Social Share)", placeholder: "Same as Page Title if left empty" },
    { key: "seo.ogDescription", label: "OG Description (Social Share)", placeholder: "Same as Meta Description if left empty", multiline: true },
    { key: "seo.ogImage", label: "OG Image URL", placeholder: "https://example.com/og-image.jpg" },
    { key: "seo.canonical", label: "Canonical URL", placeholder: "https://bcasolutions.com" },
  ];

  const renderContentField = (key: string) => {
    const current = dirty[key] ?? content[key] ?? "";

    if (ICON_KEYS.has(key)) {
      return (
        <div key={key} className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {prettyKey(key)}
          </label>
          <Select
            value={current || "Layers"}
            onValueChange={(val) => handleContentChange(key, val)}
          >
            <SelectTrigger className="bg-background border-border rounded h-10">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {ICON_OPTIONS.map((name) => {
                const Icon = ICON_MAP[name];
                return (
                  <SelectItem key={name} value={name}>
                    <span className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {name}
                    </span>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      );
    }

    if (TEXTAREA_KEYS.has(key)) {
      return (
        <div key={key} className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {prettyKey(key)}
          </label>
          <Textarea
            value={current}
            onChange={(e) => handleContentChange(key, e.target.value)}
            className="bg-background border-border rounded min-h-[80px]"
          />
        </div>
      );
    }

    return (
      <div key={key} className="space-y-1">
        <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          {prettyKey(key)}
        </label>
        <Input
          value={current}
          onChange={(e) => handleContentChange(key, e.target.value)}
          className="bg-background border-border rounded"
        />
      </div>
    );
  };

  const renderConstantField = (label: string, path: string, value: number, suffix?: string) => (
    <div className="space-y-1">
      <Label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </Label>
      <div className="flex items-center gap-2">
        <Input
          type="number"
          value={value}
          onChange={(e) => handleConstantFieldChange(path, parseFloat(e.target.value) || 0)}
          className="bg-background border-border rounded h-10"
        />
        {suffix && <span className="text-sm text-muted-foreground whitespace-nowrap">{suffix}</span>}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-muted">
      <header className="bg-foreground text-background py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-widest uppercase">BCA Admin</h1>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm text-background/60 hover:text-background transition-colors">
              Back to site
            </a>
            <button
              onClick={onLogout}
              className="text-sm text-background/60 hover:text-background transition-colors cursor-pointer"
            >
              Logout
            </button>
          </div>
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
                {keys.map((key) => renderContentField(key))}
              </div>
            ))}
            <div className="flex justify-end">
              <Button
                onClick={handleSaveContent}
                disabled={saving || Object.keys(dirty).length === 0}
                className="h-12 px-10 text-sm font-bold uppercase tracking-widest rounded"
              >
                {saving ? "Saving..." : `Save Changes (${Object.keys(dirty).length})`}
              </Button>
            </div>
          </div>
        ) : tab === "constants" ? (
          <div className="space-y-6">
            {structuredConstants && (
              <>
                <div className="bg-card border border-border p-6 space-y-6">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-foreground border-b border-border pb-2">
                    Pricing Tiers
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">S — Small</h3>
                      {renderConstantField("Setup Fee", "pricingS.setup", structuredConstants.pricingS.setup, "\u20AC")}
                      {renderConstantField("Annual Service", "pricingS.service", structuredConstants.pricingS.service, "\u20AC")}
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">M — Medium</h3>
                      {renderConstantField("Setup Fee", "pricingM.setup", structuredConstants.pricingM.setup, "\u20AC")}
                      {renderConstantField("Annual Service", "pricingM.service", structuredConstants.pricingM.service, "\u20AC")}
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-bold text-foreground uppercase tracking-wider text-sm">L — Large</h3>
                      {renderConstantField("Setup Fee", "pricingL.setup", structuredConstants.pricingL.setup, "\u20AC")}
                      {renderConstantField("Annual Service", "pricingL.service", structuredConstants.pricingL.service, "\u20AC")}
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border p-6 space-y-4">
                  <h2 className="text-lg font-bold uppercase tracking-wider text-foreground border-b border-border pb-2">
                    Calculation Parameters
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderConstantField("Automation Ratio", "automationRatio", structuredConstants.automationRatio, "%")}
                    {renderConstantField("Working Hours / Month", "workingHoursPerMonth", structuredConstants.workingHoursPerMonth, "hours")}
                  </div>
                </div>
              </>
            )}
            <div className="flex justify-end">
              <Button
                onClick={handleSaveConstants}
                disabled={saving || !constantsDirty}
                className="h-12 px-10 text-sm font-bold uppercase tracking-widest rounded"
              >
                {saving ? "Saving..." : "Save Constants"}
              </Button>
            </div>
          </div>
        ) : tab === "seo" ? (
          <div className="space-y-6">
            <div className="bg-card border border-border p-6 space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-foreground border-b border-border pb-2">
                SEO & Meta Tags
              </h2>
              <p className="text-sm text-muted-foreground">
                These values control how search engines and social media platforms display your page.
              </p>
              {SEO_FIELDS.map((field) => {
                const current = dirty[field.key] ?? content[field.key] ?? "";
                return (
                  <div key={field.key} className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {field.label}
                    </label>
                    {field.multiline ? (
                      <Textarea
                        value={current}
                        onChange={(e) => handleContentChange(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        className="bg-background border-border rounded min-h-[80px]"
                      />
                    ) : (
                      <Input
                        value={current}
                        onChange={(e) => handleContentChange(field.key, e.target.value)}
                        placeholder={field.placeholder}
                        className="bg-background border-border rounded"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleSaveContent}
                disabled={saving || Object.keys(dirty).length === 0}
                className="h-12 px-10 text-sm font-bold uppercase tracking-widest rounded"
              >
                {saving ? "Saving..." : `Save SEO (${Object.keys(dirty).length})`}
              </Button>
            </div>
          </div>
        ) : tab === "submissions" ? (
          <div className="bg-card border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">ID</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Name</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Company</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Position</th>
                    <th className="text-left px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Date</th>
                    <th className="text-right px-6 py-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {submissions.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="text-center py-12 text-muted-foreground">
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
                        <td className="px-6 py-4 text-sm text-foreground">{s.position || "—"}</td>
                        <td className="px-6 py-4 text-sm text-muted-foreground">
                          {new Date(s.createdAt).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            onClick={async () => {
                              if (!window.confirm(`Delete submission from "${s.name}"?`)) return;
                              try {
                                await deleteSubmission(s.id);
                                setSubmissions((prev) => prev.filter((x) => x.id !== s.id));
                                setMessage("Submission deleted.");
                              } catch (err) {
                                if (err instanceof Error && err.message === "Session expired") onLogout();
                                else setMessage("Failed to delete submission.");
                              }
                            }}
                            className="text-xs font-bold uppercase tracking-wider text-red-600 hover:text-red-800 transition-colors cursor-pointer"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {analyticsStats && (
              <div className="bg-card border border-border p-6">
                <h2 className="text-lg font-bold uppercase tracking-wider text-foreground border-b border-border pb-2 mb-6">
                  Calculator Usage
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-muted/50 border border-border rounded p-6 text-center">
                    <div className="text-4xl font-extrabold text-primary">{analyticsStats.calculatorUses.total}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-2">Total Uses</div>
                  </div>
                  <div className="bg-muted/50 border border-border rounded p-6 text-center">
                    <div className="text-4xl font-extrabold text-foreground">{analyticsStats.calculatorUses.thisWeek}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-2">This Week</div>
                  </div>
                  <div className="bg-muted/50 border border-border rounded p-6 text-center">
                    <div className="text-4xl font-extrabold text-foreground">{analyticsStats.calculatorUses.today}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground mt-2">Today</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function Admin() {
  const [authenticated, setAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (!getStoredToken()) {
      setChecking(false);
      return;
    }
    verifyToken()
      .then((valid) => {
        setAuthenticated(valid);
      })
      .finally(() => setChecking(false));
  }, []);

  const handleLogout = () => {
    clearStoredToken();
    setAuthenticated(false);
  };

  if (checking) {
    return (
      <div className="min-h-screen bg-muted flex items-center justify-center">
        <div className="text-muted-foreground">Verifying session...</div>
      </div>
    );
  }

  if (!authenticated) {
    return <LoginForm onLogin={() => setAuthenticated(true)} />;
  }

  return <AdminPanel onLogout={handleLogout} />;
}
