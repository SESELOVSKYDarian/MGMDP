const TECHNOLOGY_ITEMS = [
  {
    title: 'iSMART Connectivity',
    description:
      'Conectá tu MG a través de la app móvil y controlá climatización, carga remota y actualizaciones OTA.',
  },
  {
    title: 'Sistemas ADAS MG Pilot',
    description:
      'Asistentes avanzados de conducción con control crucero adaptativo, mantenimiento de carril y frenado autónomo.',
  },
  {
    title: 'Eficiencia energética',
    description:
      'Motores híbridos y eléctricos desarrollados globalmente, con baterías de alto rendimiento y garantías de 8 años.',
  },
];

const TechnologySection = () => (
  <section id="tecnologia" className="section">
    <div className="container technology">
      <div className="technology__media" role="presentation" aria-hidden="true" />
      <div className="technology__content">
        <p className="section__eyebrow">TECNOLOGÍA MG</p>
        <h2>Innovación pensada para el conductor</h2>
        <p className="section__description">
          La filosofía MG combina ingeniería británica con la visión global del grupo SAIC Motor.
          El resultado: vehículos confiables, conectados y listos para el futuro.
        </p>
        <ul className="technology__features">
          {TECHNOLOGY_ITEMS.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default TechnologySection;
