import { useState, useRef } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/cms-context";
import { submitContact } from "@/lib/api";
import { CurvedDividerTop } from "@/components/CurvedDividers";

function sanitizeHtml(html: string): string {
  return html
    .replace(/<(br|b)\s+[^>]*>/gi, (_, tag) => `<${tag}>`)
    .replace(/<(?!\/?(?:br|b)\b)[^>]*>/gi, "");
}

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
  position: z.string().optional(),
});

export default function FinalCTA() {
  const headline = useContent("cta.headline", "Start With One Process");
  const subheadline = useContent("cta.subheadline", "Validate ROI quickly and scale automation.");
  const buttonText = useContent("cta.button", "Request assessment");
  const successMessage = useContent("cta.successMessage", "We'll be in touch shortly to schedule your assessment.");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");
  const formLoadTime = useRef(Date.now());

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      position: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    setError(null);
    try {
      await submitContact({ ...values, website: honeypot, _t: formLoadTime.current });
      setSubmitted(true);
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'cta_click', {
          cta_name: 'request_assessment',
          cta_text: 'Request Assessment',
        });
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="assessment" className="relative py-16 md:py-24 pt-24 md:pt-32 bg-[#1a0a0a] text-white overflow-hidden">
      <CurvedDividerTop darkColor="#130707" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#311111] z-[5]" />
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" }} />
      <div className="absolute inset-0 bg-[#311111]/90" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              {headline}
            </h2>
            <p className="text-xl md:text-2xl font-medium text-white/90" dangerouslySetInnerHTML={{ __html: sanitizeHtml(subheadline) }} />
          </div>
          
          <div className="flex-1 w-full max-w-md bg-[#faf8f5] p-8 shadow-2xl rounded-2xl">
            {submitted ? (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 bg-[#311111]/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-[#311111]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">Thank You</h3>
                <p className="text-[#1a1a1a]/60">{successMessage}</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, overflow: "hidden" }} aria-hidden="true" tabIndex={-1}>
                    <label htmlFor="website">Website</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={honeypot}
                      onChange={(e) => setHoneypot(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1a1a] font-bold">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 rounded-xl border-[#e8e0d8] bg-white text-[#1a1a1a]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1a1a] font-bold">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" type="email" className="h-12 rounded-xl border-[#e8e0d8] bg-white text-[#1a1a1a]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1a1a] font-bold">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" className="h-12 rounded-xl border-[#e8e0d8] bg-white text-[#1a1a1a]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-[#1a1a1a] font-bold">Position</FormLabel>
                        <FormControl>
                          <Input placeholder="CTO, Operations Manager..." className="h-12 rounded-xl border-[#e8e0d8] bg-white text-[#1a1a1a]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  {error && (
                    <p className="text-sm text-red-500 font-medium">{error}</p>
                  )}
                  
                  <Button 
                    type="submit" 
                    disabled={submitting}
                    className="w-full h-14 text-base font-bold rounded-full mt-4 bg-[#311111] hover:bg-[#130707] text-white"
                    data-testid="btn-submit-assessment"
                  >
                    {submitting ? "Submitting..." : buttonText}
                  </Button>
                </form>
              </Form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
