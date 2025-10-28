import { Link } from 'react-router-dom';

const WarrantyPage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--warranty">
        <div className="page-hero__content container" data-animate="fade-up">
          <p className="eyebrow">Garantía MG</p>
          <h1>7 años o 150.000 km de confianza total</h1>
          <p>
            Cada MG cuenta con una de las coberturas más amplias del mercado: asistencia en ruta 24/7, repuestos originales
            y respaldo de la red global de la marca.
          </p>
          <div className="page-hero__cta">
            <Link className="btn btn--primary" to="/mg-care-servicios">
              Agendar servicio
            </Link>
            <a className="btn btn--outline" href="#condiciones">
              Condiciones completas
            </a>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container warranty-grid">
          <article data-animate="fade-right">
            <h2>Garantía integral</h2>
            <p>
              Cobertura de 7 años o 150.000 km para defectos de fabricación, mano de obra incluida y asistencia en cualquier
              concesionario oficial MG de Latinoamérica.
            </p>
          </article>
          <article data-animate="fade-up">
            <h2>Componentes eléctricos</h2>
            <p>
              Hasta 8 años o 160.000 km para baterías de vehículos eléctricos, con diagnóstico avanzado y sustitución en caso
              de pérdida de capacidad superior al 30%.
            </p>
          </article>
          <article data-animate="fade-left">
            <h2>MG Protect</h2>
            <p>
              Programas adicionales que incluyen vehículo sustituto, cobertura de cristales, llantas y neumáticos con
              reposición inmediata.
            </p>
          </article>
        </div>
      </section>

      <section className="page-section page-section--highlight" id="condiciones">
        <div className="container warranty-details" data-animate="fade-up">
          <div>
            <p className="eyebrow">¿Qué cubre?</p>
            <ul>
              <li>Motor, transmisión, dirección y sistema de frenos</li>
              <li>Sistemas eléctricos y electrónicos, incluido MG Pilot</li>
              <li>Cobertura anticorrosión por 7 años sin límite de kilometraje</li>
              <li>Asistencia en ruta 24 horas, los 365 días del año</li>
            </ul>
          </div>
          <div>
            <p className="eyebrow">¿Qué necesitás?</p>
            <ul>
              <li>Realizar los servicios en concesionarios oficiales MG</li>
              <li>Registrar cada mantenimiento en el cuaderno MG Care</li>
              <li>Utilizar repuestos originales aprobados por la marca</li>
              <li>Informar cualquier anomalía dentro de los 30 días</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WarrantyPage;
