import { Menu, X } from "lucide-react";
import { useState } from "react";
import adilImage from "../../img/adil.png";

// ===== Edit your nav links here =====
const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-enter fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <a href="#home" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
          <span className="h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-primary/20 bg-primary/10 transition-transform duration-300 hover:scale-110">
            <img
              src={adilImage}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </span>
          <span>
            MAHEDI HASAN<span className="text-primary">.</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              style={{ animationDelay: `${index * 70 + 150}ms` }}
              className="navbar-link-enter group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground motion-reduce:transition-none after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{ animationDelay: `${links.length * 70 + 150}ms` }}
            className="navbar-link-enter rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none">
           contact me </a>
        </nav>
        <button className="transition-transform duration-200 hover:scale-110 md:hidden motion-reduce:transition-none" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <nav className="animate-in fade-in slide-in-from-top-2 duration-200 border-t border-border bg-background px-4 py-4 md:hidden motion-reduce:animate-none">
          {links.map((l, index) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: `${index * 60}ms` }}
              className="navbar-link-enter block rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:translate-x-1 hover:bg-secondary hover:text-foreground motion-reduce:transform-none motion-reduce:transition-none"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
