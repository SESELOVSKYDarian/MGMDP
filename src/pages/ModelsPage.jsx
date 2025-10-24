import { Link } from 'react-router-dom';
import { MODELS } from '../components/ModelsShowcase.jsx';

const ModelsPage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--models">
        <div className="page-hero__content container">
          <p className="eyebrow">Gama MG</p>
          <h1>Todos los modelos disponibles en Argentina</h1>
          <p>
            Conocé las configuraciones, motorizaciones y highlights de cada modelo MG para elegir el
            que mejor se adapta a tu estilo de vida.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-grid">
          {MODELS.map((model) => (
            <article key={model.name} className="detail-card">
              <h2>{model.name}</h2>
              <p className="detail-card__tagline">{model.tagline}</p>
              <p>{model.description}</p>
              <div className="detail-card__specs">
                {model.specs.map((spec) => (
                  <div key={spec.label}>
                    <span>{spec.label}</span>
                    <strong>{spec.value}</strong>
                  </div>
                ))}
              </div>
              <Link className="button button--primary" to="/">
                Volver a la experiencia
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ModelsPage;
