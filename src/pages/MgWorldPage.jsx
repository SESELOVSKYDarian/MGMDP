const MgWorldPage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--world">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">MG World</p>
          <h1>El universo MG que inspira cada viaje</h1>
          <p>
            Diseño británico, innovación global y experiencias que conectan a la comunidad MG alrededor del mundo.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container mg-world__grid">
          <article data-animate="fade-right">
            <h2>Experiencias inmersivas</h2>
            <p>
              Eventos exclusivos, lanzamientos regionales y test drives en circuitos diseñados para descubrir el ADN MG.
            </p>
          </article>
          <article data-animate="fade-up">
            <h2>Innovación sin fronteras</h2>
            <p>
              Centros de diseño en Londres y estudios de ingeniería en Shanghái trabajan juntos para anticipar el futuro de la movilidad.
            </p>
          </article>
          <article data-animate="fade-left">
            <h2>Comunidad MG Owners</h2>
            <p>
              Viajes, rutas y contenido exclusivo para quienes comparten la pasión por MG. Sumate y viví cada kilómetro.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section page-section--highlight">
        <div className="container mg-world__banner" data-animate="fade-up">
          <div>
            <p className="eyebrow">MG Experience</p>
            <h2>Viví los grandes eventos MG en todo el mundo</h2>
            <p>
              Desde festivales de música hasta competencias de eSports, MG World conecta la marca con nuevas audiencias.
            </p>
          </div>
          <ul>
            <li>MG Live Festival &mdash; Goodwood, Reino Unido</li>
            <li>Shanghai Auto Show &mdash; Lanzamientos globales</li>
            <li>MG eSports Arena &mdash; Gaming y movilidad</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MgWorldPage;
