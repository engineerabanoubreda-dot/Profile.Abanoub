import { Mail, MapPin } from "lucide-react";
import { profile } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { GithubIcon, LinkedinIcon } from "./Icons";
import { Section } from "./Section";

export function Contact() {
  const links = [
    { icon: <Mail className="h-4 w-4" aria-hidden="true" />, label: "Email", text: profile.email, href: `mailto:${profile.email}` },
    { icon: <LinkedinIcon className="h-4 w-4" />, label: "LinkedIn", text: "abanoub-reda-gamil", href: profile.linkedin },
    { icon: <GithubIcon className="h-4 w-4" />, label: "GitHub", text: "engineerabanoubreda-dot", href: profile.github },
  ];

  return (
    <Section
      id="contact"
      index="06"
      title="Contact"
      intro="Questions, feedback or an opportunity to talk about? Send me a message and I'll get back to you."
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-3"
                >
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-muted group-hover:text-accent">
                    {l.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted">{l.label}</span>
                    <span className="block break-all text-sm font-medium group-hover:underline">{l.text}</span>
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-line bg-surface text-muted">
                <MapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-muted">Location</span>
                <span className="block text-sm font-medium">{profile.location}</span>
              </span>
            </li>
          </ul>
        </div>
        <div className="relative rounded-lg border border-line bg-surface p-6 sm:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
