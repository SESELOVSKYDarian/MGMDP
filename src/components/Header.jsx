import { useEffect, useState } from 'react';
import mgLogo from '../assets/mg-logo.svg';

const NAV_LINKS = [
  { label: 'Modelos', href: '#modelos' },
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Experiencia MG', href: '#experiencia' },
  { label: 'Test Drive', href: '#test-drive' },
  { label: 'Postventa', href: '#postventa' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpen]);

  return (
    <header className={`main-header ${isScrolled ? 'main-header--scrolled' : ''}`}>
      <div className="main-header__inner">
        <a className="main-header__brand" href="#hero" aria-label="MG Argentina">
          <img src={mgLogo} alt="MG" />
        </a>

        <nav className={`main-header__nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setIsMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="main-header__cta" href="#concesionarios">
            Encontrá un concesionario
          </a>
        </nav>

        <button
          className={`main-header__burger ${isMenuOpen ? 'is-active' : ''}`}
          type="button"
          aria-label="Menú"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;
