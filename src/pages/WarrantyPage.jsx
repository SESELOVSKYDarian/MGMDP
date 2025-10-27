const coverage = [
  {
    title: 'Garantía integral',
    description:
      'Cobertura de 7 años o 150.000 km para defectos de fabricación con asistencia en concesionarios oficiales.',
  },
  {
    title: 'Garantía batería MG EV',
    description: '8 años o 160.000 km asegurados para packs de baterías de vehículos 100% eléctricos.',
  },
  {
    title: 'Servicios adicionales',
    description:
      'Vehículo sustituto, asistencia en viaje y cobertura de cristales disponible para planes MG Protect.',
  },
];

const WarrantyPage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--warranty">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">Garantía &amp; Servicios</p>
          <h1>Confianza MG respaldada por una cobertura líder</h1>
          <p>
            La garantía MG combina soporte global con la cercanía de nuestra red local. Conocé los
            beneficios incluidos y opciones para ampliarlos según tus necesidades.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-columns">
          {coverage.map((item, index) => (
            <article
              key={item.title}
              data-animate="fade-up"
              data-animate-delay={`${0.12 * index + 0.18}s`}
            >
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WarrantyPage;
