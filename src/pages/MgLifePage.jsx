const MgLifePage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--life">
        <div className="page-hero__content container">
          <p className="eyebrow">MG Life</p>
          <h1>Estilo, cultura y experiencias MG en primera persona</h1>
          <p>
            Descubrí contenidos editoriales, rutas recomendadas y entrevistas con referentes que
            comparten el espíritu MG: energía, diseño y libertad.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-columns">
          <article>
            <h2>Rutas imperdibles</h2>
            <p>
              Itinerarios diseñados por especialistas para sacar el máximo provecho de tu MG. Paisajes
              de montaña, escapadas urbanas y viajes largos con puntos de carga identificados.
            </p>
          </article>
          <article>
            <h2>Historias de conductores</h2>
            <p>
              Protagonistas que eligen MG cuentan cómo la marca acompaña su día a día. Inspirate con
              experiencias reales y sumá tus propias aventuras a la comunidad.
            </p>
          </article>
          <article>
            <h2>Contenido exclusivo</h2>
            <p>
              Wallpapers, playlists y behind the scenes para vivir la marca más allá del volante.
              Suscribite al newsletter MG Life para recibir novedades antes que nadie.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MgLifePage;
