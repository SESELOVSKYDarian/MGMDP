const MgLifePage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--life">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">MG Life</p>
          <h1>Historias y estilo de vida MG</h1>
          <p>
            Contenidos, colaboraciones y experiencias que celebran la creatividad y el espíritu joven de la marca.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container mg-life__grid">
          <article data-animate="fade-right">
            <span>Colaboraciones</span>
            <h2>MG x Diseño</h2>
            <p>
              Proyectos con artistas y diseñadores emergentes que reinterpretan el ADN británico de MG.
            </p>
          </article>
          <article data-animate="fade-up">
            <span>Inspiración</span>
            <h2>Rutas recomendadas</h2>
            <p>
              Viajes curados por la comunidad MG Owners con paisajes icónicos y puntos gastronómicos.
            </p>
          </article>
          <article data-animate="fade-left">
            <span>Contenido</span>
            <h2>MG Podcast</h2>
            <p>
              Entrevistas con referentes de la movilidad, la música y el diseño que marcan tendencia.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section page-section--highlight">
        <div className="container mg-life__stories" data-animate="fade-up">
          <div>
            <p className="eyebrow">MG Stories</p>
            <h2>Sumate a la comunidad</h2>
            <p>
              Compartí tu experiencia MG con el hashtag #MGStories y participá por invitaciones a eventos exclusivos.
            </p>
          </div>
          <a className="button button--primary" href="https://www.instagram.com/mg_argentina/" target="_blank" rel="noreferrer">
            Seguir en Instagram
          </a>
        </div>
      </section>
    </div>
  );
};

export default MgLifePage;
