import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Projects from './components/projects';

function App() {
  return (
          <div>
            <Nav />
            <Home />
            <About />
            <Projects />
            <Contact />
            <Footer />
          </div>
  );
}

export default App;
