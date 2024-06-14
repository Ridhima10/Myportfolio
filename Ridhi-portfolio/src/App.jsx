import './App.css';
import Footer from './sections/Footer/Footer';
import Projects from './sections/Projects/Projects'
import Hero from './sections/Hero/Hero'
import Skills from './sections/Skills/Skills'

function App() {
  return (
    <>
      <Hero/>
      <Projects/>
      <Skills/>
      {/* <Experience/> */}
      <Footer/>
    </>
  );
}

export default App;
