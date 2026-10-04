import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Training from '../components/Training.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
export default function Home() {
  return (
    <>
      <a className="skip" href="#about">Skip to content</a>
      <Header />
      <main><Hero /><About /><Skills /><Projects /><Training /><Contact /></main>
      <Footer />
    </>
  );
}
