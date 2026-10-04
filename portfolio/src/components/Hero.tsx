import { ArrowRight, Download, MapPin } from "lucide-react";
import { atAGlance, profile } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "./Icons";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="scroll-mt-16">
      <div className="mx-auto grid max-w-5xl gap-12 px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <div>
          <p className="inline-flex items-center gap-2 font-mono text-sm text-muted">
            <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
            {profile.location}
          </p>
          <h1 id="hero-title" className="mt-5 font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-lg font-medium text-accent">{profile.roles.join(" · ")}</p>
          <p className="mt-5 max-w-xl text-lg text-muted">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-ink px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              View projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-ink"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download CV
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted transition-colors hover:text-ink"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <aside aria-label="At a glance" className="self-start rounded-lg border border-line bg-surface p-6">
          <h2 className="font-mono text-xs uppercase tracking-wider text-muted">At a glance</h2>
          <dl className="mt-4 divide-y divide-line text-sm">
            {atAGlance.map((row) => (
              <div key={row.label} className="flex justify-between gap-4 py-3 first:pt-0">
                <dt className="text-muted">{row.label}</dt>
                <dd className="text-right font-medium">{row.value}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-2 border-t border-line pt-4 text-sm text-muted">{profile.status}.</p>
        </aside>
      </div>
    </section>
  );
}
