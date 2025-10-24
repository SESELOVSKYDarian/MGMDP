const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__media" role="presentation" aria-hidden="true">
        <div className="hero__overlay" />
      </div>
      <div className="hero__content container">
        <p className="hero__eyebrow">MG ARGENTINA</p>
        <h1>Pasión británica. ADN global.</h1>
        <p className="hero__description">
          Descubrí la nueva generación de vehículos MG: diseño audaz, tecnología intuitiva y
          performance que inspira cada kilómetro.
        </p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#modelos">
            Ver modelos
          </a>
          <a className="btn btn--outline" href="#test-drive">
            Solicitar test drive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
