import { useEffect } from "react";
import { useContent } from "@/lib/cms-context";

export default function SeoHead() {
  const title = useContent("seo.title", "Managed Automation by BCA");
  const description = useContent("seo.description", "Deliver business process automation as a fully managed service.");
  const ogTitle = useContent("seo.ogTitle", "");
  const ogDescription = useContent("seo.ogDescription", "");
  const ogImage = useContent("seo.ogImage", "");
  const canonical = useContent("seo.canonical", "");
  const keywords = useContent("seo.keywords", "");

  useEffect(() => {
    if (title) document.title = title;

    const setMeta = (name: string, content: string, isProperty = false) => {
      if (!content) return;
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", description);
    setMeta("keywords", keywords);
    setMeta("og:title", ogTitle || title, true);
    setMeta("og:description", ogDescription || description, true);
    setMeta("og:type", "website", true);
    if (ogImage) setMeta("og:image", ogImage, true);
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", ogTitle || title);
    setMeta("twitter:description", ogDescription || description);
    if (ogImage) setMeta("twitter:image", ogImage);
  }, [title, description, ogTitle, ogDescription, ogImage, canonical, keywords]);

  return null;
}
