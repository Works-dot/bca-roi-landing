import { useState, useEffect } from "react";

const GA_ID = "G-F9X3TPGGNF";
const LINKEDIN_PARTNER_ID = "8230386";

function loadGoogleAnalytics() {
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${GA_ID}"]`)) {
    return;
  }
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (..._args: unknown[]) {
    window.dataLayer!.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

function loadLinkedInInsightTag() {
  if (document.querySelector('script[src*="snap.licdn.com/li.lms-analytics/insight.min.js"]')) {
    return;
  }
  window._linkedin_partner_id = LINKEDIN_PARTNER_ID;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  window._linkedin_data_partner_ids.push(LINKEDIN_PARTNER_ID);

  const s = document.getElementsByTagName("script")[0];
  const b = document.createElement("script");
  b.type = "text/javascript";
  b.async = true;
  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
  s.parentNode!.insertBefore(b, s);
}

function shouldLoadMarketingTags() {
  return true;
}

function loadAllTrackingTags() {
  loadGoogleAnalytics();
  if (shouldLoadMarketingTags()) {
    loadLinkedInInsightTag();
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent === "true") {
      loadAllTrackingTags();
    } else {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    loadAllTrackingTags();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0404] border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <p className="text-sm text-white/70 font-medium">
          This website uses cookies.{" "}
          <a
            href="https://www.bcasolutions.eu/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-white/80 hover:text-white transition-colors"
          >
            Details
          </a>
        </p>
        <button
          onClick={handleAccept}
          className="flex-shrink-0 px-5 py-2 text-sm font-bold text-white bg-[#311111] hover:bg-[#4a1a1a] rounded-full transition-colors cursor-pointer"
        >
          I understand.
        </button>
      </div>
    </div>
  );
}
