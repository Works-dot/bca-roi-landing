import { Facebook, Linkedin, Instagram, Globe } from "lucide-react";
import { Link } from "wouter";
import { useContent } from "@/lib/cms-context";
import { CurvedDividerTop } from "@/components/CurvedDividers";
import footerLogo from "@assets/Logo_v2_1775568074590.png";
import uipathFastTrack from "@assets/uipath-fast-track-partner-logo_1775638887078.png";
import uipathGoldPartner from "@assets/uipath-partner-gold-lockup-digital-rgb-w_1775638381699.png";

export default function Footer() {
  const tagline = useContent("footer.tagline", "Experts In Technology, Partners In Business");
  const subtitle = useContent("footer.subtitle", "Empowering Your Digital Journey since 2007");
  const facebookUrl = useContent("footer.social.facebook", "https://facebook.com/bcasolutions");
  const linkedinUrl = useContent("footer.social.linkedin", "https://linkedin.com/company/bcasolutions");
  const instagramUrl = useContent("footer.social.instagram", "https://instagram.com/bcasolutions");
  const websiteUrl = useContent("footer.social.website", "https://bcasolutions.hu");
  const copyright = useContent("footer.copyright", "BCA Solutions. All rights reserved.");
  const privacyText = useContent("footer.privacy.text", "Privacy Policy");

  const socials = [
    { icon: Facebook, label: "Facebook", url: facebookUrl },
    { icon: Linkedin, label: "LinkedIn", url: linkedinUrl },
    { icon: Instagram, label: "Instagram", url: instagramUrl },
    { icon: Globe, label: "Website", url: websiteUrl },
  ];

  return (
    <footer className="relative bg-[#311111] text-white pt-20 md:pt-24">
      <CurvedDividerTop darkColor="#311111" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-6 pb-10">
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
            <img src={footerLogo} alt="BCA Solutions" className="h-16 md:h-20" />
          </a>

          <h3 className="text-xl md:text-2xl font-bold">
            {tagline}
          </h3>

          <p className="text-sm md:text-base text-white/70 font-medium">
            {subtitle}
          </p>

          <div className="flex items-center justify-center gap-6 md:gap-8 pt-2">
            <a href="https://www.uipath.com/partners/business-partners?location=hungary" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={uipathFastTrack}
                alt="UiPath Fast Track Partner"
                className="h-14 md:h-16 object-contain"
              />
            </a>
            <a href="https://www.uipath.com/partners/business-partners?location=hungary" target="_blank" rel="noopener noreferrer" className="cursor-pointer">
              <img
                src={uipathGoldPartner}
                alt="UiPath Gold Partner"
                className="max-w-[160px] md:max-w-[200px] object-contain"
              />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
              >
                <s.icon className="w-4 h-4" />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/15 py-6 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm text-white/60">
          <span>&copy; {new Date().getFullYear()} {copyright}</span>
          <Link
            href="/privacy"
            className="font-bold text-white/80 hover:text-white transition-colors"
          >
            {privacyText}
          </Link>
        </div>
      </div>
    </footer>
  );
}
