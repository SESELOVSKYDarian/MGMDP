import { useState } from 'react';

export const MODELS = [
  {
    slug: 'mg-zs-ev',
    name: 'MG ZS EV',
    tagline: 'La SUV 100% eléctrica pensada para el día a día',
    description:
      'Batería de iones de litio de 51 kWh con autonomía de hasta 320 km WLTP, torque instantáneo y MG iSMART con actualizaciones OTA.',
    image:
      'https://res.cloudinary.com/dxjubrqnd/image/upload/v1706828558/mg-argentina/modelo-mg-zs-ev.jpg',
    highlights: ['Autonomía 320 km', 'Carga rápida 40 min', 'MG Pilot con 5 asistencias'],
    specs: [
      { label: 'Potencia', value: '177 CV' },
      { label: 'Torque', value: '280 Nm' },
      { label: 'Batería', value: '51 kWh' },
      { label: 'Conectividad', value: 'MG iSMART' },
    ],
  },
  {
    slug: 'mg-gt',
    name: 'MG GT',
    tagline: 'Performance deportiva con espíritu británico',
    description:
      'Silueta fastback, motor 1.5T de 173 CV y un interior envolvente con butacas deportivas y doble pantalla flotante.',
    image:
      'https://res.cloudinary.com/dxjubrqnd/image/upload/v1706828558/mg-argentina/modelo-mg-gt.jpg',
    highlights: ['Motor 1.5T 173 CV', 'Caja DCT 7 vel.', 'MG Pilot con 10 asistencias'],
    specs: [
      { label: '0-100 km/h', value: '8,5 segundos' },
      { label: 'Consumo', value: '6,7 l/100 km' },
      { label: 'Pantalla', value: '10,1" con Android Auto' },
      { label: 'Baúl', value: '401 litros' },
    ],
  },
  {
    slug: 'mg-hs',
    name: 'MG HS',
    tagline: 'SUV premium con tecnología MG Pilot',
    description:
      'Habitáculo amplio, acabados soft touch y paquete MG Pilot con 12 asistencias ADAS para viajar con tranquilidad.',
    image:
      'https://res.cloudinary.com/dxjubrqnd/image/upload/v1706828558/mg-argentina/modelo-mg-hs.jpg',
    highlights: ['Motor 1.5T 162 CV', 'MG Pilot 12 asistencias', 'Techo panorámico'],
    specs: [
      { label: 'Transmisión', value: 'DCT 7 velocidades' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Pantalla', value: '12,3" + 10,1" dual' },
      { label: 'Garantía', value: '7 años o 150.000 km' },
    ],
  },
];

const ModelsShowcase = () => {
  const [selectedModel, setSelectedModel] = useState(null);

  return (
    <section className="modelos" id="modelos">
      <div className="section-header" data-animate="fade-up">
        <p className="eyebrow">Modelos MG</p>
        <h2>Innovación que inspira cada viaje</h2>
        <p>
          Descubrí la gama MG con diseños icónicos, tecnología inteligente y
          performance preparada para el presente y el futuro.
        </p>
      </div>

      <div className="modelos__grid">
        {MODELS.map((model, index) => (
          <article
            key={model.name}
            className="modelo-card"
            data-animate="fade-up"
            data-animate-delay={`${0.12 * (index + 1)}s`}
            id={model.slug}
          >
            <div
              className="modelo-card__image"
              style={{ backgroundImage: `url(${model.image})` }}
              aria-hidden="true"
            />
            <div className="modelo-card__body">
              <h3>{model.name}</h3>
              <p className="modelo-card__tagline">{model.tagline}</p>
              <p className="modelo-card__description">{model.description}</p>
              <ul className="modelo-card__highlights">
                {model.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <div className="modelo-card__actions">
                <a className="button button--primary" href="#cotizar">
                  Cotizar modelo
                </a>
                <button
                  type="button"
                  className="button button--ghost"
                  onClick={() => setSelectedModel(model)}
                >
                  Ficha técnica
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {selectedModel && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={`Ficha técnica ${selectedModel.name}`}
          onClick={() => setSelectedModel(null)}
        >
          <div
            className="modal-card"
            onClick={(event) => event.stopPropagation()}
            role="document"
          >
            <button
              type="button"
              className="modal-card__close"
              aria-label="Cerrar ficha técnica"
              onClick={() => setSelectedModel(null)}
            >
              ×
            </button>
            <p className="eyebrow">Ficha técnica</p>
            <h3>{selectedModel.name}</h3>
            <p className="modal-card__tagline">{selectedModel.tagline}</p>
            <div className="modal-card__specs">
              {selectedModel.specs.map((spec) => (
                <div key={spec.label} className="modal-card__spec">
                  <span>{spec.label}</span>
                  <strong>{spec.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ModelsShowcase;
