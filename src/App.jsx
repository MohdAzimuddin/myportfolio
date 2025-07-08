
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Tech from './components/Tech/Tech';
import Projects from './components/Projectss/Projects';
import Contact from './components/Contact/Contact';
import './App.css'; // Import the CSS file
import Experience from './components/Experience/Experience';

const App = () => {
  return (
    <>
      <div className="background-gradient"></div>
      <main className="main-container">
        <Navbar/>
        <Hero/>
        <Tech/>
        <Experience/>
        <Projects/>
        <Contact/>
      </main>
    </>
  );
};

export default App;
