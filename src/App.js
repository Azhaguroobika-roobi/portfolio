import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import About from './components/about';
import Contact from './components/contact';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
