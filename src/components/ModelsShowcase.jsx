const MODELS = [
  {
    id: 'mg4',
    name: 'MG4 EV',
    description: '100% eléctrico con hasta 450 km de autonomía WLTP y conectividad de última generación.',
    image:
      'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tag: 'Nuevo',
  },
  {
    id: 'hs',
    name: 'MG HS',
    description: 'SUV mediano con diseño deportivo, motor turbo y sistemas avanzados de asistencia ADAS.',
    image:
      'https://images.pexels.com/photos/4488660/pexels-photo-4488660.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tag: 'Híbrido enchufable',
  },
  {
    id: 'zs',
    name: 'MG ZS',
    description: 'Compacto urbano con amplio equipamiento de seguridad y entretenimiento inteligente.',
    image:
      'https://images.pexels.com/photos/4489726/pexels-photo-4489726.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    tag: 'Best Seller',
  },
];

const ModelsShowcase = () => {
  return (
    <section id="modelos" className="section section--light">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">LINE-UP</p>
          <h2>Elegí el MG que va con vos</h2>
          <p className="section__description">
            Cada modelo MG combina diseño sofisticado con tecnologías inteligentes y estándares de
            seguridad globales. Descubrí la opción ideal para tu estilo de vida.
          </p>
        </div>
        <div className="models-grid">
          {MODELS.map((model) => (
            <article key={model.id} className="model-card">
              <span className="model-card__tag">{model.tag}</span>
              <div className="model-card__image" style={{ backgroundImage: `url(${model.image})` }}>
                <span className="sr-only">{model.name}</span>
              </div>
              <div className="model-card__body">
                <h3>{model.name}</h3>
                <p>{model.description}</p>
                <div className="model-card__actions">
                  <a href={`#${model.id}-ficha`} className="link">
                    Ficha técnica
                  </a>
                  <a href="#test-drive" className="link">
                    Reservar test drive
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsShowcase;
