const MaintenancePage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--maintenance">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">Pauta de mantenimiento</p>
          <h1>Plan oficial cada 10.000 kilómetros</h1>
          <p>
            Seguí el cronograma de servicios MG para preservar la garantía y asegurar el rendimiento óptimo de tu vehículo.
            Todos los trabajos incluyen repuestos originales y mano de obra especializada.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container maintenance-table">
          <article data-animate="fade-right">
            <h2>Servicio 10.000 km</h2>
            <ul>
              <li>Cambio de aceite, filtro y revisión de fluidos</li>
              <li>Chequeo de frenos, neumáticos y suspensión</li>
              <li>Actualización de software MG iSMART</li>
            </ul>
          </article>
          <article data-animate="fade-up">
            <h2>Servicio 20.000 km</h2>
            <ul>
              <li>Reemplazo de filtros de aire y habitáculo</li>
              <li>Alineación, balanceo y calibración de sensores</li>
              <li>Diagnóstico electrónico completo</li>
            </ul>
          </article>
          <article data-animate="fade-left">
            <h2>Servicio 40.000 km</h2>
            <ul>
              <li>Reemplazo de bujías y correas auxiliares</li>
              <li>Purga de líquido de frenos y refrigerante</li>
              <li>Control de seguridad MG Pilot</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page-section">
        <div className="container maintenance-notes" data-animate="fade-up">
          <h2>Consejos MG Care</h2>
          <ul>
            <li>Respetá los intervalos de tiempo aunque no alcances el kilometraje indicado.</li>
            <li>Registrá cada servicio en tu cuaderno de mantenimiento para conservar la garantía.</li>
            <li>Utilizá siempre repuestos originales MG para mantener la performance y seguridad.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default MaintenancePage;
