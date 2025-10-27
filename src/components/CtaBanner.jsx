const CtaBanner = () => (
  <section id="test-drive" className="cta-banner">
    <div className="container cta-banner__inner">
      <div data-animate="fade-right">
        <p className="cta-banner__eyebrow">TEST DRIVE</p>
        <h2>Sentí la potencia MG</h2>
        <p>
          Reservá tu test drive online y descubrí la sensación de manejar un MG. Elegí el modelo,
          la sucursal más cercana y coordiná tu visita en minutos.
        </p>
      </div>
      <a
        className="btn btn--light"
        href="https://forms.gle/Ht6rW7MGTestDrive"
        target="_blank"
        rel="noreferrer"
        data-animate="fade-left"
        data-animate-delay="0.2s"
      >
        Reservar turno
      </a>
    </div>
  </section>
);

export default CtaBanner;
