const QUOTE_MODELS = [
  {
    name: 'MG4 Electric',
    description: 'Hatchback 100% eléctrico con 435 km de autonomía WLTP.',
    image:
      'https://images.unsplash.com/photo-1619767886558-efdc259cde1d?auto=format&fit=crop&w=1200&q=80',
    quoteUrl: 'https://mgargentina.ar/cotizar/?model=mg4',
  },
  {
    name: 'MG GT',
    description: 'Sedán deportivo turbo con diseño fastback y 173 CV.',
    image:
      'https://images.unsplash.com/photo-1617813489683-eddfea8b10ae?auto=format&fit=crop&w=1200&q=80',
    quoteUrl: 'https://mgargentina.ar/cotizar/?model=mg-gt',
  },
  {
    name: 'MG RX5',
    description: 'SUV conectado con pantalla de 14" y sistema MG Pilot.',
    image:
      'https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1200&q=80',
    quoteUrl: 'https://mgargentina.ar/cotizar/?model=mg-rx5',
  },
];

const CotizarSection = () => {
  return (
    <section className="cotizar" id="cotizar">
      <div className="container cotizar__header" data-animate="fade-up">
        <p className="eyebrow">Cotizá tu MG</p>
        <h2>Elegí el modelo que querés manejar</h2>
        <p>
          Seleccioná el vehículo que más se adapta a tu estilo y recibí una
          propuesta personalizada de la red oficial MG Argentina.
        </p>
      </div>

      <div className="container cotizar__grid">
        {QUOTE_MODELS.map((model, index) => (
          <article
            key={model.name}
            className="cotizar-card"
            data-animate="fade-up"
            data-animate-delay={`${0.14 * (index + 1)}s`}
          >
            <div
              className="cotizar-card__image"
              style={{ backgroundImage: `url(${model.image})` }}
              aria-hidden="true"
            />
            <div className="cotizar-card__content">
              <h3>{model.name}</h3>
              <p>{model.description}</p>
              <a
                className="button button--primary"
                href={model.quoteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Cotizar ahora
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CotizarSection;
