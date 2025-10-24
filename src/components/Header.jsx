import { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import mgLogo from '../assets/mg-logo.svg';

const NAV_LINKS = [
  { label: 'Inicio', to: '/' },
  { label: 'Modelos', to: '/modelos' },
  { label: 'MG World', to: '/mg-world' },
  { label: 'MG Life', to: '/mg-life' },
  { label: 'MG Care', to: '/mg-care' },
  { label: 'Mantenimiento', to: '/mantenimiento' },
  { label: 'Garantía', to: '/garantia-y-servicios' },
];

const QUICK_ACTIONS = [
  { label: 'Cotizar', hash: '#cotizar', variant: 'primary' },
  { label: 'Test Drive', hash: '#test-drive', variant: 'ghost' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', isMenuOpen);
  }, [isMenuOpen]);

  const handleHashNavigation = (hash) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/', { state: { targetId: hash.replace('#', '') } });
      return;
    }

    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`main-header ${isScrolled ? 'main-header--scrolled' : ''}`}>
      <div className="main-header__inner">
        <NavLink className="main-header__brand" to="/" aria-label="MG Argentina" onClick={() => setIsMenuOpen(false)}>
          <img src={mgLogo} alt="MG" />
        </NavLink>

        <nav className={`main-header__nav ${isMenuOpen ? 'is-open' : ''}`} aria-label="Principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="main-header__actions">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                type="button"
                className={`button ${action.variant === 'ghost' ? 'button--ghost' : 'button--primary'}`}
                onClick={() => handleHashNavigation(action.hash)}
              >
                {action.label}
              </button>
            ))}
          </div>
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
