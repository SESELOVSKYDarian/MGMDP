import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ModelsShowcase from './components/ModelsShowcase.jsx';
import TechnologySection from './components/TechnologySection.jsx';
import ExperienceSection from './components/ExperienceSection.jsx';
import CtaBanner from './components/CtaBanner.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Hero />
        <ModelsShowcase />
        <TechnologySection />
        <ExperienceSection />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
