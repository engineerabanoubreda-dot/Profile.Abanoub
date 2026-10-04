import { projects, profile } from '../data/content.js';
export default function Projects() {
  return (
    <section className="section" id="projects" aria-labelledby="projects-h">
      <div className="wrap">
        <h2 id="projects-h">Projects</h2>
        <ul className="projects">
          {projects.map((p) => (
            <li key={p.title} className="project">
              <h3>{p.title}</h3>
              <p className="meta">{p.type}</p>
              <p>{p.text}</p>
              {p.result && <p className="result">{p.result}</p>}
              <ul className="tags small">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul>
            </li>
          ))}
        </ul>
        <p className="more">Code and notebooks are on <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      </div>
    </section>
  );
}
