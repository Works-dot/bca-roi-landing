import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(2, "Company is required"),
});

export default function FinalCTA() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Visual only
    console.log(values);
  }

  return (
    <section id="assessment" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold uppercase leading-tight">
              START WITH ONE PROCESS
            </h2>
            <p className="text-xl md:text-2xl font-medium text-primary-foreground/90">
              Validate ROI quickly and scale automation.
            </p>
          </div>
          
          <div className="flex-1 w-full max-w-md bg-background p-8 border-t-4 border-foreground shadow-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground font-bold uppercase tracking-wider">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="h-12 rounded-none border-border bg-background text-foreground" {...field} />
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
                        <Input placeholder="john@company.com" type="email" className="h-12 rounded-none border-border bg-background text-foreground" {...field} />
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
                        <Input placeholder="Acme Corp" className="h-12 rounded-none border-border bg-background text-foreground" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full h-14 text-base font-bold uppercase tracking-widest rounded-none mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="btn-submit-assessment"
                >
                  Request Detailed Assessment
                </Button>
              </form>
            </Form>
          </div>

        </div>
      </div>
    </section>
  );
}
