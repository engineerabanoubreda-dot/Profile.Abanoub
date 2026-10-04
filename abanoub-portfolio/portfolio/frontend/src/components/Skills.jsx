import { skills } from '../data/content.js';
export default function Skills() {
  return (
    <section className="section alt" id="skills" aria-labelledby="skills-h">
      <div className="wrap">
        <h2 id="skills-h">Skills</h2>
        <div className="skill-grid">
          {skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul className="tags">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
