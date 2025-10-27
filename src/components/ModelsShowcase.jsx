import { useState } from 'react';

export const MODELS = [
  {
    name: 'MG4 Electric',
    tagline: 'Diseñado para la nueva movilidad urbana',
    description:
      'Plataforma modular MSP, tracción trasera y hasta 435 km de autonomía WLTP con carga rápida del 10 al 80% en 35 minutos.',
    image:
      'https://images.unsplash.com/photo-1617813489745-76e8ed1d35d8?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Autonomía 435 km', '0-100 km/h en 7,9 s', 'Pantalla dual 10,25"'],
    specs: [
      { label: 'Batería', value: '61,1 kWh' },
      { label: 'Potencia', value: '204 CV' },
      { label: 'Torque', value: '250 Nm' },
      { label: 'Seguridad', value: 'MG Pilot ADAS' },
    ],
  },
  {
    name: 'MG GT',
    tagline: 'La silueta fastback que desafía lo convencional',
    description:
      'Motor turbo 1.5T de 173 CV, caja DCT de 7 velocidades y un interior deportivo inspirado en el mundo racing.',
    image:
      'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1200&q=80',
    highlights: ['173 CV turbo', 'Pantalla 10" + MG iSmart', '0-100 km/h en 8,5 s'],
    specs: [
      { label: 'Motor', value: '1.5T 173 CV' },
      { label: 'Transmisión', value: 'DCT 7 velocidades' },
      { label: 'Consumo mixto', value: '6,7 l/100 km' },
      { label: 'Maletero', value: '401 litros' },
    ],
  },
  {
    name: 'MG RX5',
    tagline: 'El SUV conectado para vivir grandes experiencias',
    description:
      'Diseño británico con grilla Stardust, motor 1.5 turbo y asistencias MG Pilot para llevar la seguridad un paso más allá.',
    image:
      'https://images.unsplash.com/photo-1617813489683-eddfea8b10ae?auto=format&fit=crop&w=1200&q=80',
    highlights: ['Pantalla 14"', 'MG Pilot 2.0', 'Baúl 595 litros'],
    specs: [
      { label: 'Motor', value: '1.5T 171 CV' },
      { label: 'Tracción', value: 'Delantera' },
      { label: 'Consumo', value: '7,4 l/100 km' },
      { label: 'Conectividad', value: 'Apple CarPlay & Android Auto' },
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
