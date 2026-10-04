import { education, training } from "@/data/site";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" index="04" title="Education & Training">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Education</h3>
          <div className="mt-5 rounded-lg border border-line bg-surface p-6">
            <p className="font-mono text-sm text-accent">{education.period}</p>
            <h4 className="mt-2 font-serif text-xl font-medium leading-snug">{education.degree}</h4>
            <p className="mt-1 text-sm text-muted">{education.track}</p>
            <p className="mt-4 text-sm">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.note}</p>
          </div>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted">Training programs</h3>
          <ol className="mt-5 space-y-0 border-l border-line">
            {training.map((t) => (
              <li key={t.title} className="relative pb-8 pl-6 last:pb-0">
                <span
                  className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-accent bg-bg"
                  aria-hidden="true"
                />
                <p className="font-mono text-xs text-muted">{t.period}</p>
                <h4 className="mt-1 font-medium">{t.title}</h4>
                <p className="text-sm text-accent">{t.org}</p>
                <p className="mt-1.5 text-sm text-muted">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
