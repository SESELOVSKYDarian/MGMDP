import Hero from '../components/Hero.jsx';
import ModelsShowcase from '../components/ModelsShowcase.jsx';
import TechnologySection from '../components/TechnologySection.jsx';
import ExperienceSection from '../components/ExperienceSection.jsx';
import CotizarSection from '../components/CotizarSection.jsx';
import CtaBanner from '../components/CtaBanner.jsx';

const Home = () => {
  return (
    <>
      <Hero />
      <ModelsShowcase />
      <CotizarSection />
      <TechnologySection />
      <ExperienceSection />
      <CtaBanner />
    </>
  );
};

export default Home;
