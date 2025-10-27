const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero__media" role="presentation" aria-hidden="true" data-animate="zoom-in">
        <div className="hero__overlay" />
      </div>
      <div className="hero__content container">
        <p className="hero__eyebrow" data-animate="fade-down">
          MG ARGENTINA
        </p>
        <h1 data-animate="fade-up" data-animate-delay="0.1s">Pasión británica. ADN global.</h1>
        <p className="hero__description" data-animate="fade-up" data-animate-delay="0.2s">
          Descubrí la nueva generación de vehículos MG: diseño audaz, tecnología intuitiva y
          performance que inspira cada kilómetro.
        </p>
        <div className="hero__actions" data-animate="fade-up" data-animate-delay="0.32s">
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
