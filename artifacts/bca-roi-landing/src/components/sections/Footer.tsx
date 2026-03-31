export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-background/20">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold tracking-widest uppercase">
          BCA Solutions
        </div>
        <div className="text-background/60 font-medium">
          &copy; {new Date().getFullYear()} BCA Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
