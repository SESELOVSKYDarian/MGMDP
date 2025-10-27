const MgWorldPage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--world">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">MG World</p>
          <h1>Inspirados por la herencia británica y la innovación global</h1>
          <p>
            MG World es el universo donde convergen diseño, tecnología y experiencias para quienes
            disfrutan cada kilómetro. Conocé nuestros eventos, alianzas y comunidades alrededor del
            mundo.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-columns">
          <article data-animate="fade-right" data-animate-delay="0.12s">
            <h2>Eventos &amp; lifestyle</h2>
            <p>
              Desde festivales de música hasta exhibiciones de motorsport, MG está presente en los
              principales encuentros culturales del planeta. Sumate a nuestra agenda para recibir
              invitaciones exclusivas y vivir la marca de cerca.
            </p>
          </article>
          <article data-animate="fade-up" data-animate-delay="0.22s">
            <h2>Innovación sin fronteras</h2>
            <p>
              Centros de diseño en Londres, estudios de ingeniería en Shanghái y hubs tecnológicos en
              Silicon Valley nos permiten anticipar el futuro del mobility. Descubrí cómo nuestros
              equipos globales co-crean cada modelo MG.
            </p>
          </article>
          <article data-animate="fade-left" data-animate-delay="0.32s">
            <h2>Comunidad MG Owners</h2>
            <p>
              Ser parte de MG World es acceder a beneficios, experiencias de manejo y contenidos
              exclusivos. Unite a la comunidad de propietarios para compartir viajes, rutas y consejos
              de mantenimiento.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MgWorldPage;
