import mgLogo from '../assets/mg-logo.svg';

const Footer = () => (
  <footer id="postventa" className="footer">
    <div className="container footer__inner">
      <div className="footer__brand">
        <img src={mgLogo} alt="MG" />
        <p>© {new Date().getFullYear()} MG Motor Argentina. Todos los derechos reservados.</p>
      </div>
      <div className="footer__columns">
        <div>
          <h3>Modelos</h3>
          <ul>
            <li>
              <a href="#mg4-ficha">MG4 EV</a>
            </li>
            <li>
              <a href="#hs-ficha">MG HS</a>
            </li>
            <li>
              <a href="#zs-ficha">MG ZS</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Servicios</h3>
          <ul>
            <li>
              <a href="#test-drive">Test Drive</a>
            </li>
            <li>
              <a href="#postventa">Postventa</a>
            </li>
            <li>
              <a href="#concesionarios">Concesionarios</a>
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
