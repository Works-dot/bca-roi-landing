import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useContent } from "@/lib/cms-context";
import { CurvedDividerBottom } from "@/components/CurvedDividers";
import Footer from "@/components/sections/Footer";
import logo from "@assets/bca_logo_1775555829987.png";

const DEFAULT_PRIVACY_CONTENT = `
<h2>1. Introduction</h2>
<p>This Privacy Policy explains how BCA Solutions ("we", "us", "our") collects, uses, and protects your personal data when you visit our website.</p>

<h2>2. Data We Collect</h2>
<p>We may collect the following types of personal data:</p>
<ul>
  <li>Name, email address, company name, and job title (when you submit our contact form)</li>
  <li>Usage data such as pages visited, time spent on pages, and referring URLs</li>
  <li>Technical data including IP address, browser type, and device information</li>
</ul>

<h2>3. How We Use Your Data</h2>
<p>We use your personal data for the following purposes:</p>
<ul>
  <li>To respond to your inquiries and provide requested services</li>
  <li>To improve our website and user experience</li>
  <li>To send relevant communications about our services (only with your consent)</li>
  <li>To comply with legal obligations</li>
</ul>

<h2>4. Cookies</h2>
<p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device. We use:</p>
<ul>
  <li><strong>Essential cookies:</strong> Required for basic website functionality</li>
  <li><strong>Analytics cookies:</strong> Help us understand how visitors interact with our website (Google Analytics)</li>
</ul>
<p>You can control cookie settings through your browser preferences.</p>

<h2>5. Data Sharing</h2>
<p>We do not sell your personal data. We may share data with trusted third-party service providers who assist in operating our website and conducting our business, subject to confidentiality agreements.</p>

<h2>6. Data Retention</h2>
<p>We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.</p>

<h2>7. Your Rights</h2>
<p>Under GDPR, you have the right to:</p>
<ul>
  <li>Access your personal data</li>
  <li>Rectify inaccurate data</li>
  <li>Request deletion of your data</li>
  <li>Restrict or object to processing</li>
  <li>Data portability</li>
</ul>
<p>To exercise these rights, please contact us at the details provided below.</p>

<h2>8. Contact</h2>
<p>If you have any questions about this Privacy Policy, please contact us through the assessment form on our website or visit <a href="https://bcasolutions.hu" target="_blank" rel="noopener noreferrer">bcasolutions.hu</a>.</p>
`;

export default function Privacy() {
  const cmsContent = useContent("privacy.content", "");
  const privacyContent = cmsContent || DEFAULT_PRIVACY_CONTENT;

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#130707] text-white overflow-x-hidden">
      <section className="relative bg-[#311111] pt-8 pb-20 md:pb-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/" className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
              <img src={logo} alt="BCA Solutions" className="h-8" />
            </Link>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
              Privacy Policy
            </h1>
          </div>
        </div>
        <CurvedDividerBottom darkColor="#130707" />
      </section>

      <main className="flex-1">
        <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
          <div
            className="max-w-3xl mx-auto prose prose-invert prose-headings:font-bold prose-headings:text-white prose-p:text-white/80 prose-li:text-white/80 prose-a:text-white prose-a:underline prose-strong:text-white prose-ul:list-disc prose-ol:list-decimal"
            dangerouslySetInnerHTML={{ __html: privacyContent }}
          />
          <div className="max-w-3xl mx-auto mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
