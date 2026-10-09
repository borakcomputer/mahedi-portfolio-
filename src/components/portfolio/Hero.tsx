import { ArrowRight, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:px-6 md:py-32">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Based in America
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl">
            Hi, I'm <span className="text-primary">Mahedi</span> — I build websites that work.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            A web developer with a diploma in hand and a passion for clean,
            fast, modern websites — from e-commerce stores to business pages.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View My Work <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-2xl" />
          <div className="relative flex aspect-square items-center justify-center rounded-3xl border border-border bg-card text-center shadow-xl">
            <div>
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
                M
              </div>
              <p className="mt-4 text-lg font-semibold">Mahedi</p>
              <p className="text-sm text-muted-foreground">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
