import { Link } from 'react-router-dom';

const ServicesPage = () => {
  return (
    <div className="page">
      <section className="page-hero page-hero--services">
        <div className="container page-hero__content" data-animate="fade-up">
          <p className="eyebrow">MG Care</p>
          <h1>Servicios oficiales para cuidar tu MG</h1>
          <p>
            Nuestra red de talleres autorizados combina técnicos certificados, herramientas MG y repuestos
            originales para mantener tu vehículo siempre como nuevo.
          </p>
          <div className="page-hero__cta">
            <a className="btn btn--primary" href="#turno">
              Solicitar turno
            </a>
            <Link className="btn btn--outline" to="/mg-care">
              Conocer MG Care
            </Link>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="container care-services__grid">
          <article className="care-services__card" data-animate="fade-right">
            <h2>Service programado</h2>
            <p>
              Realizamos el mantenimiento de acuerdo a la pauta oficial MG, con diagnóstico electrónico, cambios de
              fluidos y calibración de sistemas de seguridad.
            </p>
            <ul>
              <li>Turnos coordinados en la red oficial</li>
              <li>Historial de servicio digital</li>
              <li>Entrega con control de calidad certificado</li>
            </ul>
          </article>
          <article className="care-services__card" data-animate="fade-up">
            <h2>Reparaciones especialistas</h2>
            <p>
              Contamos con bancos de enderezado, cabinas de pintura homologadas y herramientas MG para garantizar un
              acabado perfecto en carrocería y mecánica.
            </p>
            <ul>
              <li>Repuestos originales con garantía</li>
              <li>Diagnóstico MG iSMART y actualizaciones OTA</li>
              <li>Supervisión directa de técnicos master MG</li>
            </ul>
          </article>
          <article className="care-services__card" data-animate="fade-left">
            <h2>Asistencia 24/7</h2>
            <p>
              Cobertura nacional con remolque, auxilio mecánico y soporte remoto para brindarte tranquilidad en cada
              viaje.
            </p>
            <ul>
              <li>Hotline exclusivo MG Care</li>
              <li>Traslado a concesionario más cercano</li>
              <li>Vehículo de cortesía sujeto a disponibilidad</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="page-section page-section--highlight" id="turno">
        <div className="container care-services__highlight">
          <div data-animate="fade-right">
            <p className="eyebrow">Turnos online</p>
            <h2>Elegí día, horario y concesionario MG</h2>
            <p>
              Seleccioná tu modelo, completá tus datos y coordiná tu próxima visita al servicio oficial. Nuestro equipo se
              contactará para confirmar tu turno dentro de las próximas 24 horas hábiles.
            </p>
          </div>
          <form className="care-services__form" data-animate="fade-left">
            <label>
              Nombre y apellido
              <input type="text" name="name" placeholder="Ingresá tu nombre" required />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="nombre@email.com" required />
            </label>
            <label>
              Modelo MG
              <select name="modelo" defaultValue="">
                <option value="" disabled>
                  Seleccioná una opción
                </option>
                <option>MG ZS EV</option>
                <option>MG GT</option>
                <option>MG HS</option>
              </select>
            </label>
            <label>
              Concesionario preferido
              <input type="text" name="dealer" placeholder="Ciudad o concesionario" />
            </label>
            <label>
              Comentarios
              <textarea name="message" placeholder="Dejanos tus comentarios" rows="4" />
            </label>
            <button type="submit" className="button button--primary">
              Enviar solicitud
            </button>
          </form>
        </div>
      </section>

      <section className="page-section">
        <div className="container care-services__cta" data-animate="fade-up">
          <h2>Conocé la garantía MG de 7 años o 150.000 km</h2>
          <p>
            Descubrí la cobertura completa, piezas incluidas y condiciones para tu vehículo MG visitando la sección de
            garantía oficial.
          </p>
          <Link className="button button--primary" to="/mg-care-garantia">
            Ir a garantía
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
