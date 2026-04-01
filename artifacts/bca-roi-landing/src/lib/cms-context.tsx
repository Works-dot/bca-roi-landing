import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { fetchContent, fetchConstants } from "./api";

interface CmsData {
  content: Record<string, string>;
  constants: Record<string, unknown>;
  loading: boolean;
  error: string | null;
}

const CmsContext = createContext<CmsData>({
  content: {},
  constants: {},
  loading: true,
  error: null,
});

export function CmsProvider({ children }: { children: ReactNode }) {
  const [content, setContent] = useState<Record<string, string>>({});
  const [constants, setConstants] = useState<Record<string, unknown>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([fetchContent(), fetchConstants()])
      .then(([c, k]) => {
        setContent(c);
        setConstants(k);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <CmsContext.Provider value={{ content, constants, loading, error }}>
      {children}
    </CmsContext.Provider>
  );
}

export function useCms() {
  return useContext(CmsContext);
}

export function useContent(key: string, fallback: string = ""): string {
  const { content } = useCms();
  return content[key] ?? fallback;
}

export function useConstants() {
  const { constants } = useCms();
  return constants;
}
