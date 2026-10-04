import { BarChart3, Brain, Code, Database, Layers, type LucideIcon } from "lucide-react";
import { skillGroups, softSkills } from "@/data/site";
import { Section } from "./Section";

const icons: Record<string, LucideIcon> = { code: Code, chart: BarChart3, brain: Brain, layers: Layers, database: Database };

export function Skills() {
  return (
    <Section
      id="skills"
      index="02"
      title="Skills"
      intro="Tools and concepts I have used in projects and training."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = icons[group.icon] ?? Code;
          return (
            <div key={group.title} className="rounded-lg border border-line bg-surface p-6">
              <h3 className="flex items-center gap-2.5 font-medium">
                <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item} className="rounded border border-line bg-subtle px-2.5 py-1 font-mono text-[13px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div id="soft-skills" className="mt-16 scroll-mt-20">
        <h3 className="font-serif text-2xl font-medium tracking-tight">Soft skills</h3>
        <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {softSkills.map((s) => (
            <div key={s.title} className="border-t border-line pt-4">
              <dt className="font-medium">{s.title}</dt>
              <dd className="mt-1 text-sm text-muted">{s.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
