const maintenancePlan = [
  {
    mileage: '10.000 km o 12 meses',
    tasks: ['Cambio de aceite y filtro', 'Chequeo de frenos', 'Diagnóstico electrónico'],
  },
  {
    mileage: '20.000 km o 24 meses',
    tasks: ['Rotación de neumáticos', 'Filtro de habitáculo', 'Actualización de software MG iSmart'],
  },
  {
    mileage: '40.000 km o 48 meses',
    tasks: ['Filtro de combustible', 'Reemplazo de refrigerante', 'Alineación y balanceo'],
  },
];

const MaintenancePage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--maintenance">
        <div className="page-hero__content container">
          <p className="eyebrow">Pauta de mantenimiento</p>
          <h1>Plan oficial para mantener tu MG como nuevo</h1>
          <p>
            Seguimos un programa preventivo diseñado por ingenieros MG a nivel global. Conocé las
            intervenciones recomendadas según kilometraje para asegurar performance y garantía.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div className="maintenance-table">
            {maintenancePlan.map((item) => (
              <article key={item.mileage}>
                <h2>{item.mileage}</h2>
                <ul>
                  {item.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;
