import { certifications, experience } from '../data/content.js';
export default function Training() {
  return (
    <section className="section alt" id="training" aria-labelledby="training-h">
      <div className="wrap two-col">
        <div>
          <h2 id="training-h">Experience &amp; education</h2>
          <ol className="timeline">
            {experience.map((e) => (
              <li key={e.role}><h3>{e.role}</h3><p className="meta">{e.org} · {e.when}</p><p>{e.text}</p></li>
            ))}
          </ol>
        </div>
        <div>
          <h2>Certifications &amp; training</h2>
          <ul className="certs">
            {certifications.map((c) => (
              <li key={c.name + c.org}><strong>{c.name}</strong><span>{[c.org, c.when].filter(Boolean).join(' · ')}</span></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
