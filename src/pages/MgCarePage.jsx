const MgCarePage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--care">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">MG Care</p>
          <h1>Servicios posventa diseñados para cuidar tu MG</h1>
          <p>
            Nuestra red oficial garantiza el mantenimiento integral del vehículo con técnicos
            certificados, repuestos originales y soporte personalizado.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container page-columns">
          <article data-animate="fade-right" data-animate-delay="0.12s">
            <h2>Service programado</h2>
            <p>
              Agenda tu turno online y elegí el concesionario más conveniente. Nuestros especialistas
              realizan diagnósticos integrales con herramientas MG.
            </p>
          </article>
          <article data-animate="fade-up" data-animate-delay="0.22s">
            <h2>Repuestos originales</h2>
            <p>
              Disponemos de stock permanente de piezas homologadas para asegurar performance,
              seguridad y garantía en cada intervención.
            </p>
          </article>
          <article data-animate="fade-left" data-animate-delay="0.32s">
            <h2>Asistencia 24/7</h2>
            <p>
              MG Care ofrece cobertura de asistencia en ruta en todo el país: remolque, auxilio
              mecánico y soporte remoto para tu tranquilidad.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default MgCarePage;
