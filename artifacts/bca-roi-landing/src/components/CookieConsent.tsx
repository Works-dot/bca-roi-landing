import { useState, useEffect } from "react";
import { Link } from "wouter";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (consent !== "true") {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0404] border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 py-3 flex items-center justify-between gap-4">
        <p className="text-sm text-white/70 font-medium">
          This website uses cookies.{" "}
          <Link
            href="/privacy"
            className="underline text-white/80 hover:text-white transition-colors"
          >
            Details
          </Link>
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
