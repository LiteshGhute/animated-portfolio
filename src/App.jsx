import './app.scss'
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Project from './components/project/Project';
import TechStack from './components/techStack/TechStack';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
      <Hero/>  
    </section>
    <section id='Education & Skills'><Parallax type="services"/></section>
    <section><TechStack/></section>
    <section id='Projects'><Parallax type="portfolio"/></section>
    <Project/>
    <section id='Contact'><Contact/></section>
  </div>;
};

export default App;
