import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import mgLogo from '../assets/mg-logo.svg';

const NAV_ITEMS = [
  { label: 'Modelos', to: '/modelos' },
  {
    label: 'MG World',
    to: '/mg-world',
    children: [
      { label: 'MG World', to: '/mg-world' },
      { label: 'MG Life', to: '/mg-life' },
    ],
  },
  {
    label: 'MG Care',
    to: '/mg-care',
    children: [
      { label: 'Servicios', to: '/mg-care-servicios' },
      { label: 'Pauta de mantenimiento', to: '/mg-care-pauta-de-mantenimiento' },
      { label: 'Garantía', to: '/mg-care-garantia' },
    ],
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownLabels = useMemo(
    () => NAV_ITEMS.filter((item) => item.children).map((item) => item.label),
    [],
  );
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : true,
  );

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

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const handleChange = (event) => {
      setIsDesktop(event.matches);
      setOpenDropdown(null);
      if (event.matches) {
        setIsMenuOpen(false);
      }
    };

    if (media.addEventListener) {
      media.addEventListener('change', handleChange);
    } else {
      media.addListener(handleChange);
    }

    return () => {
      if (media.removeEventListener) {
        media.removeEventListener('change', handleChange);
      } else {
        media.removeListener(handleChange);
      }
    };
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
    setIsMenuOpen(false);
  }, [location.pathname]);

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

  const toggleDropdown = (label) => {
    if (isDesktop) return;
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const handleNavClick = (itemLabel) => {
    if (!isDesktop && dropdownLabels.includes(itemLabel)) {
      setOpenDropdown(null);
      setIsMenuOpen(false);
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
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className={`nav-item ${item.children ? 'has-children' : ''} ${openDropdown === item.label ? 'is-open' : ''}`}>
                <div className="nav-item__trigger">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) => (isActive ? 'is-active' : undefined)}
                    onClick={() => handleNavClick(item.label)}
                  >
                    {item.label}
                  </NavLink>
                  {item.children && (
                    <button type="button" aria-label={`Abrir ${item.label}`} onClick={() => toggleDropdown(item.label)}>
                      <span />
                    </button>
                  )}
                </div>

                {item.children && (
                  <ul className="nav-item__dropdown">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <NavLink to={child.to} onClick={() => handleNavClick(item.label)} className={({ isActive }) => (isActive ? 'is-active' : undefined)}>
                          {child.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="main-header__actions">
            <button type="button" className="button button--primary" onClick={() => handleHashNavigation('#cotizar')}>
              Cotizá tu MG
            </button>
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
