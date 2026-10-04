import { profile } from '../data/content.js';
export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <p className="kicker">{profile.location}</p>
        <h1>Abanoub Reda Gamil</h1>
        <p className="role">AI & Machine Learning Engineer · Data Analyst · Full-Stack Developer</p>
        <p className="lede">I'm a Management Information Systems student building practical projects in machine learning, data analytics and software. I like turning messy datasets into models and dashboards people can use.</p>
        <div className="cta">
          <a className="btn primary" href="#projects">View projects</a>
          <a className="btn" href={profile.cv} download>Download CV</a>
          <a className="btn" href="#contact">Contact me</a>
        </div>
      </div>
    </section>
  );
}
