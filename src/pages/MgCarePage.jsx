import { Link } from 'react-router-dom';

const MgCarePage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--care">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">MG Care</p>
          <h1>Posventa oficial con cobertura nacional</h1>
          <p>
            Disfrutá de tu MG con la tranquilidad de contar con asistencia, mantenimiento programado y garantía extendida
            durante 7 años o 150.000 km.
          </p>
          <div className="page-hero__cta">
            <Link className="btn btn--primary" to="/mg-care-servicios">
              Servicios MG
            </Link>
            <Link className="btn btn--outline" to="/mg-care-garantia">
              Ver garantía
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container care-overview">
          <article data-animate="fade-right">
            <h2>Red de concesionarios autorizados</h2>
            <p>
              Más de 30 puntos de atención equipados con herramientas MG, técnicos certificados y stock de repuestos
              originales.
            </p>
          </article>
          <article data-animate="fade-up">
            <h2>Garantía integral</h2>
            <p>
              Cobertura total de 7 años o 150.000 km que respalda cada componente del vehículo con asistencia en ruta 24/7.
            </p>
          </article>
          <article data-animate="fade-left">
            <h2>Experiencia digital</h2>
            <p>
              Reservá tu turno online, recibí recordatorios automáticos y seguí el estado del servicio desde MG iSMART.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section page-section--highlight">
        <div className="container care-banner" data-animate="fade-up">
          <div>
            <p className="eyebrow">MG Care Benefits</p>
            <h2>Todo lo que necesitás para disfrutar tu MG</h2>
            <p>
              Cobertura nacional, vehículo de cortesía sujeto a disponibilidad, asistencia en ruta y beneficios exclusivos
              para clientes registrados.
            </p>
          </div>
          <ul>
            <li>Agenda digital y recordatorios</li>
            <li>Actualizaciones de software MG iSMART</li>
            <li>Control multipunto en cada visita</li>
            <li>Programa de fidelización MG Life</li>
          </ul>
        </div>
      </section>

      <section className="page-section">
        <div className="container care-links" data-animate="fade-up">
          <Link className="care-links__card" to="/mg-care-servicios">
            <span>Servicios</span>
            <strong>Turnos y reparaciones</strong>
          </Link>
          <Link className="care-links__card" to="/mg-care-pauta-de-mantenimiento">
            <span>Pauta MG</span>
            <strong>Mantenimiento programado</strong>
          </Link>
          <Link className="care-links__card" to="/mg-care-garantia">
            <span>Garantía</span>
            <strong>Condiciones oficiales</strong>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MgCarePage;
