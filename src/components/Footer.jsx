import { Link } from 'react-router-dom';
import mgLogo from '../assets/mg-logo.svg';

const Footer = () => (
  <footer className="footer">
    <div className="container footer__inner">
      <div className="footer__brand">
        <img src={mgLogo} alt="MG" />
        <p>© {new Date().getFullYear()} MG Motor Argentina. Todos los derechos reservados.</p>
      </div>
      <div className="footer__columns">
        <div>
          <h3>Explorá</h3>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/modelos">Modelos</Link>
            </li>
            <li>
              <Link to="/mg-world">MG World</Link>
            </li>
            <li>
              <Link to="/mg-life">MG Life</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Servicios</h3>
          <ul>
            <li>
              <Link to="/mg-care">MG Care</Link>
            </li>
            <li>
              <Link to="/mantenimiento">Pauta de mantenimiento</Link>
            </li>
            <li>
              <Link to="/garantia-y-servicios">Garantía &amp; servicios</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul>
            <li>
              <a href="mailto:contacto@mgargentina.ar">contacto@mgargentina.ar</a>
            </li>
            <li>
              <a href="tel:+541143000000">+54 11 4300 0000</a>
            </li>
            <li>
              <a href="https://www.instagram.com/mgmotorarg/" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
