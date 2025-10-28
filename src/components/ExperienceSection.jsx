const ExperienceSection = () => (
  <section id="experiencia" className="section section--dark">
    <div id="concesionarios" className="container experience">
      <div className="experience__content" data-animate="fade-right">
        <p className="section__eyebrow">EXPERIENCIA MG</p>
        <h2>Red de concesionarios y servicios a nivel país</h2>
        <p className="section__description">
          Recibí asesoramiento personalizado en nuestra red oficial, con más de 25 puntos de venta
          y postventa en Argentina. Disfrutá de planes de financiación exclusivos, garantías de
          hasta 7 años y asistencia MG Care 24/7.
        </p>
        <div className="experience__grid">
          <div data-animate="fade-up" data-animate-delay="0.12s">
            <strong>25+</strong>
            <span>Concesionarios oficiales</span>
          </div>
          <div data-animate="fade-up" data-animate-delay="0.18s">
            <strong>7 años</strong>
            <span>Garantía de fábrica</span>
          </div>
          <div data-animate="fade-up" data-animate-delay="0.24s">
            <strong>24/7</strong>
            <span>Asistencia MG Care</span>
          </div>
          <div data-animate="fade-up" data-animate-delay="0.3s">
            <strong>0%</strong>
            <span>Tasa promocional en planes seleccionados</span>
          </div>
        </div>
      </div>
      <div className="experience__media" role="presentation" aria-hidden="true" data-animate="fade-left" />
    </div>
  </section>
);

export default ExperienceSection;
