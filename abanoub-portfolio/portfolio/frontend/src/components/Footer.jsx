import { profile } from '../data/content.js';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap bar">
        <p>© {new Date().getFullYear()} Abanoub Reda Gamil</p>
        <p className="links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.cv} download>CV</a>
        </p>
      </div>
    </footer>
  );
}
