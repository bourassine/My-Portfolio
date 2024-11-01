import './App.css';
import Header from './component/header/header.jsx';
import Home from './component/home/home';
import About from './component/about/About';
import Skills from './component/skills/Skills';
import Services from './component/services/Services';
import Qualification from './component/qualification/Qualification';
import Testimonials from './component/testimonials/Testimonials';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer.jsx';
import ScrollUp from './component/scrollup/ScrollUp';

function App() {
  return (
    <div>
    
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      <Qualification />
      <Testimonials />
      <Contact />
      
    </main>

    <Footer />
    <ScrollUp />

    </div>
  );
}

export default App;
