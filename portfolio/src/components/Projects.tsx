import { ArrowUpRight } from "lucide-react";
import { profile, projects, type Project } from "@/data/site";
import { GithubIcon } from "./Icons";
import { Section } from "./Section";

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const rows = [
    { label: "Problem", text: project.problem },
    { label: "Solution", text: project.solution },
    { label: "Result", text: project.result },
  ];

  return (
    <article className="grid gap-6 border-t border-line py-10 first:border-t-0 first:pt-0 lg:grid-cols-[1fr_1.6fr] lg:gap-12">
      <div>
        <p className="font-mono text-sm text-accent">
          {String(index + 1).padStart(2, "0")}
          {project.date && <span className="text-muted"> · {project.date}</span>}
        </p>
        <h3 className="mt-2 font-serif text-2xl font-medium leading-snug tracking-tight">{project.title}</h3>
        <p className="mt-1 text-sm text-muted">{project.kind}</p>

        {project.facts && (
          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
            {project.facts.map((f) => (
              <div key={f.label}>
                <dt className="text-xs text-muted">{f.label}</dt>
                <dd className="font-mono text-sm font-medium">{f.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {project.links && project.links.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-3">
            {project.links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-accent underline-offset-4 hover:underline"
                >
                  {l.label} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <dl className="space-y-4">
          {rows.map((r) => (
            <div key={r.label} className="grid gap-1 sm:grid-cols-[5.5rem_1fr] sm:gap-4">
              <dt className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">{r.label}</dt>
              <dd>{r.text}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-5 flex flex-wrap gap-2 sm:pl-[6.5rem]" aria-label="Technologies">
          {project.stack.map((t) => (
            <li key={t} className="rounded border border-line bg-subtle px-2.5 py-1 font-mono text-[13px]">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      intro="Personal and training projects, from raw data to a working model, dashboard or app. Dataset sizes and scores are from my own project notes."
    >
      <div>
        {projects.map((p, i) => (
          <ProjectItem key={p.title} project={p} index={i} />
        ))}
      </div>
      <p className="mt-6 flex flex-wrap items-center gap-x-2 border-t border-line pt-8 text-sm text-muted">
        Source code and more work:
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-medium text-ink underline underline-offset-4 hover:text-accent"
        >
          <GithubIcon className="h-4 w-4" /> GitHub profile
        </a>
      </p>
    </Section>
  );
}
