import Footer from './components/Footer';
import Header from './components/Header';
import AboutMe from './sections/AboutMe';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Visual from './sections/Visual';
import GlobalStyle from './styled/Global;';

const App = () => {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Visual/>
      <AboutMe />
      <Projects/>
      <Skills/>
      <Footer />
    </>
  );
};

export default App;