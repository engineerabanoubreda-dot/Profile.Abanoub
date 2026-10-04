import { Award } from "lucide-react";
import { certificates } from "@/data/site";
import { Section } from "./Section";

export function Certificates() {
  return (
    <Section id="certificates" index="05" title="Certificates & Courses">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((c) => (
          <li key={c.title} className="flex flex-col rounded-lg border border-line bg-surface p-5">
            <Award className="h-5 w-5 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-medium leading-snug">{c.title}</h3>
            <p className="mt-1 text-sm text-muted">{c.org}</p>
            {"year" in c && c.year && <p className="mt-auto pt-4 font-mono text-xs text-muted">{c.year}</p>}
          </li>
        ))}
      </ul>
    </Section>
  );
}
