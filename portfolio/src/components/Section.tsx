export function Section({
  id,
  index,
  title,
  intro,
  children,
}: {
  id: string;
  index: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-16 border-t border-line py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <header className="mb-10 max-w-2xl sm:mb-14">
          <p className="font-mono text-sm text-accent">{index}</p>
          <h2 id={`${id}-title`} className="mt-2 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-4 text-muted">{intro}</p>}
        </header>
        {children}
      </div>
    </section>
  );
}
