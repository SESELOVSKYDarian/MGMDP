import { useEffect, useMemo, useRef, useState } from 'react';

const HERO_SLIDES = [
  {
    id: 'mg-zs-ev',
    eyebrow: '100% ELÉCTRICO',
    title: 'MG ZS EV',
    description: 'La SUV eléctrica con ADN británico que redefine la movilidad urbana.',
    ctaLabel: 'Conocela',
    ctaHref: '/modelos#mg-zs-ev',
    background:
      'https://res.cloudinary.com/dxjubrqnd/image/upload/v1706827819/mg-argentina/hero-mg-zs-ev.jpg',
  },
  {
    id: 'mg-gt',
    eyebrow: 'SEDÁN DEPORTIVO',
    title: 'MG GT',
    description: 'Diseño fastback, motor turbo y un interior premium pensado para inspirar cada viaje.',
    ctaLabel: 'Descubrir MG GT',
    ctaHref: '/modelos#mg-gt',
    background:
      'https://res.cloudinary.com/dxjubrqnd/image/upload/v1706827819/mg-argentina/hero-mg-gt.jpg',
  },
  {
    id: 'mg-hs',
    eyebrow: 'TECNOLOGÍA Y CONFORT',
    title: 'MG HS',
    description: 'Un SUV sofisticado con asistencias MG Pilot y un habitáculo pensado para la familia.',
    ctaLabel: 'Explorar MG HS',
    ctaHref: '/modelos#mg-hs',
    background:
      'https://res.cloudinary.com/dxjubrqnd/image/upload/v1706827819/mg-argentina/hero-mg-hs.jpg',
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef(null);
  const touchStartX = useRef(0);
  const prefersReducedMotion = useMemo(
    () => (typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false),
    [],
  );

  const goToSlide = (index) => {
    setActiveIndex((index + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleNext = () => {
    goToSlide(activeIndex + 1);
  };

  const handlePrev = () => {
    goToSlide(activeIndex - 1);
  };

  useEffect(() => {
    if (prefersReducedMotion) return undefined;
    autoplayRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const onTouchEnd = (event) => {
    const delta = event.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) < 40) return;
    if (delta < 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  return (
    <section id="hero" className="hero" aria-label="Destacados MG Argentina">
      <div className="hero__slider" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {HERO_SLIDES.map((slide, index) => (
          <article
            key={slide.id}
            className={`hero__slide ${index === activeIndex ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${slide.background})` }}
            aria-hidden={index === activeIndex ? 'false' : 'true'}
          >
            <div className="hero__overlay" />
            <div className="hero__content container">
              <p className="hero__eyebrow">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="hero__description">{slide.description}</p>
              <div className="hero__actions">
                <a className="btn btn--primary" href={slide.ctaHref}>
                  {slide.ctaLabel}
                </a>
                <a className="btn btn--outline" href="#cotizar">
                  Cotizá tu MG
                </a>
              </div>
            </div>
          </article>
        ))}

        <button type="button" className="hero__nav hero__nav--prev" onClick={handlePrev} aria-label="Anterior">
          <span />
        </button>
        <button type="button" className="hero__nav hero__nav--next" onClick={handleNext} aria-label="Siguiente">
          <span />
        </button>

        <div className="hero__indicators" role="tablist" aria-label="Slides destacados">
          {HERO_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={index === activeIndex ? 'is-active' : ''}
              onClick={() => goToSlide(index)}
              aria-label={`Ir al slide ${index + 1}`}
              aria-selected={index === activeIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
