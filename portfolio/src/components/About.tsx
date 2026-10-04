import { about } from "@/data/site";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Interests</h3>
          <ul className="mt-4 space-y-2">
            {about.interests.map((i) => (
              <li key={i} className="flex gap-3 border-b border-line pb-2 text-sm">
                <span className="text-accent" aria-hidden="true">
                  →
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14">
        <h3 className="font-mono text-xs uppercase tracking-wider text-muted">How I approach a data project</h3>
        <ol className="mt-5 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {about.workflow.map((step, i) => (
            <li key={step.title} className="bg-surface p-4">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-1 text-sm font-medium">{step.title}</p>
              <p className="mt-1 text-sm text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
