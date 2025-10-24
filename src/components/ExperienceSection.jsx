const ExperienceSection = () => (
  <section id="experiencia" className="section section--dark">
    <div id="concesionarios" className="container experience">
      <div className="experience__content">
        <p className="section__eyebrow">EXPERIENCIA MG</p>
        <h2>Red de concesionarios y servicios a nivel país</h2>
        <p className="section__description">
          Recibí asesoramiento personalizado en nuestra red oficial, con más de 25 puntos de venta
          y postventa en Argentina. Disfrutá de planes de financiación exclusivos, garantías de
          hasta 7 años y asistencia MG Care 24/7.
        </p>
        <div className="experience__grid">
          <div>
            <strong>25+</strong>
            <span>Concesionarios oficiales</span>
          </div>
          <div>
            <strong>7 años</strong>
            <span>Garantía de fábrica</span>
          </div>
          <div>
            <strong>24/7</strong>
            <span>Asistencia MG Care</span>
          </div>
          <div>
            <strong>0%</strong>
            <span>Tasa promocional en planes seleccionados</span>
          </div>
        </div>
      </div>
      <div className="experience__media" role="presentation" aria-hidden="true" />
    </div>
  </section>
);

export default ExperienceSection;
