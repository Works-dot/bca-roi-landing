import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContent } from "@/lib/cms-context";
import { submitContact } from "@/lib/api";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
});

export default function FinalCTA() {
  const headline = useContent("cta.headline", "START WITH ONE PROCESS");
  const subheadline = useContent("cta.subheadline", "Validate ROI quickly and scale automation.");
  const buttonText = useContent("cta.button", "Request Detailed Assessment");

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);
    setError(null);
    try {
      await submitContact(values);
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id="assessment" className="py-16 md:py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069')" }} />
      <div className="absolute inset-0 bg-primary/90" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
              {headline}
            </h2>
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/90">
              {subheadline}
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-md bg-background p-8 border-t-4 border-foreground shadow-2xl">
            {submitted ? (
              <div className="text-center space-y-4 py-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground uppercase tracking-wider">Thank You</h3>
                <p className="text-muted-foreground">We'll be in touch within 24 hours to schedule your assessment.</p>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-bold uppercase tracking-wider">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" className="h-12 rounded border-border bg-background text-foreground" {...field} />
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
                        <FormLabel className="text-foreground font-bold uppercase tracking-wider">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@company.com" type="email" className="h-12 rounded border-border bg-background text-foreground" {...field} />
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
                        <FormLabel className="text-foreground font-bold uppercase tracking-wider">Company</FormLabel>
                        <FormControl>
                          <Input placeholder="Acme Corp" className="h-12 rounded border-border bg-background text-foreground" {...field} />
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
                    className="w-full h-14 text-base font-bold uppercase tracking-widest rounded mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
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
