import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { carsData } from './carsData';
import Hero from './Hero';
import './pages.css';

const MainPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [activeFilter, setActiveFilter] = useState<string>('all');

  // 🔥 выбор цены (дни)
  const [selectedPriceOption, setSelectedPriceOption] = useState<{ [key: string]: number }>(() => {
    const initialState: { [key: string]: number } = {};
    carsData.forEach(car => {
      initialState[car.id] = 0;
    });
    return initialState;
  });

  useEffect(() => {
    const handleFilterEvent = (e: Event) => {
      const customEvent = e as CustomEvent;
      setActiveFilter(customEvent.detail);
    };

    window.addEventListener('filterCatalog', handleFilterEvent);
    return () => window.removeEventListener('filterCatalog', handleFilterEvent);
  }, []);

  useEffect(() => {
    const state = location.state as { scrollTo?: string; filter?: string } | null;

    if (!state?.scrollTo) return;

    if (state.filter) {
      setActiveFilter(state.filter);
    }

    const timer = window.setTimeout(() => {
      const selectorByTarget: Record<string, string> = {
        popular: '.main-page-block',
        catalog: '.main-page-block',
        'why-us': '#why-us',
        contacts: '#contacts',
      };
      const section = document.querySelector(selectorByTarget[state.scrollTo || '']);

      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);

    return () => window.clearTimeout(timer);
  }, [location.state]);

  const categoryLabels: { [key: string]: string } = {
    all: 'Все',
    econom: 'Эконом',
    premium: 'Премиум',
    luxury: 'Люкс',
    popular: 'Популярные',
  };

  const filteredCars = (() => {
    if (activeFilter === 'all') {
      return carsData;
    } else if (activeFilter === 'popular') {
      // Популярные - это машины premium и luxury категорий
      return carsData.filter(car => car.category === 'premium' || car.category === 'luxury');
    } else {
      return carsData.filter(car => car.category === activeFilter);
    }
  })();

  const handleBooking = (e: React.MouseEvent, carId: string, carName: string) => {
    e.stopPropagation();
    window.dispatchEvent(new CustomEvent('openBookingModal', {
      detail: { carId, carName },
    }));
  };

  const handleCardClick = (path: string) => {
    navigate(path);
  };

  return (
    <div className="zeekr-container">
      <Hero />

      {/* КАТАЛОГ */}
      <div className="block main-page-block" id="catalog">
        <div className="main-page-content">
          <h1 className="main-title">Наша коллекция автомобилей</h1>

          <div className="filter-buttons">
            {['all', 'econom', 'premium', 'luxury', 'popular'].map(filter => (
              <button
                key={filter}
                className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {categoryLabels[filter]}
              </button>
            ))}
          </div>

          <div className="cars-grid">
            {filteredCars.map(car => (
              <div
                key={car.id}
                className="car-card"
                onClick={() => handleCardClick(car.path)}
              >
                <img src={car.image} alt={car.name} className="car-image" />

                <div className="car-info">
                  <h3 className="car-name">{car.name}</h3>
                  <span className="car-category">{categoryLabels[car.category]}</span>

                  <div className="car-specs">
                    <div className="spec-tag">{car.specs.seats}</div>
                    <div className="spec-tag">{car.specs.transmission}</div>
                    <div className="spec-tag">{car.specs.consumption}</div>
                    <div className="spec-tag">{car.specs.engine}</div>
                  </div>

                  {/* 💰 ДИНАМИЧЕСКАЯ ЦЕНА */}
                  <div className="price-display">
                    {car.options[selectedPriceOption[car.id] ?? 0].text}
                  </div>

                  {/* 🔘 ВЫБОР ДНЕЙ */}
                  <div className="price-options">
                    {car.options.map((option, idx) => (
                      <button
                        key={idx}
                        className={`price-button ${selectedPriceOption[car.id] === idx ? 'active' : ''}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedPriceOption({
                            ...selectedPriceOption,
                            [car.id]: idx
                          });
                        }}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>

                  {/* 📩 БРОНИРОВАНИЕ */}
                  <button
                    className="booking-button"
                    onClick={(e) => handleBooking(e, car.id, car.name)}
                  >
                    Забронировать
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* СЕКЦИЯ ПОЧЕМУ МЫ */}
      <section className="block why-us-section" id="why-us">
        <div className="why-us-content">
          <h2 className="why-us-title">Почему мы?</h2>
          
          <div className="why-us-grid">
            <div className="why-us-card">
              <div className="why-us-icon">⚡</div>
              <h3>Быстро</h3>
              <p>Оформление за 5 минут без сложных документов</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-icon">🛡️</div>
              <h3>Надежно</h3>
              <p>Все автомобили застрахованы и прошли техническое обслуживание</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-icon">💰</div>
              <h3>Доступно</h3>
              <p>Гибкие тарифы и скидки при долгосрочной аренде</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-icon">🚗</div>
              <h3>Премиальный парк</h3>
              <p>Автомобили ведущих мировых производителей</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-icon">📞</div>
              <h3>Поддержка 24/7</h3>
              <p>Круглосуточная поддержка клиентов по любым вопросам</p>
            </div>

            <div className="why-us-card">
              <div className="why-us-icon">🌍</div>
              <h3>По всему городу</h3>
              <p>Доставка автомобиля в любую точку города</p>
            </div>
          </div>
        </div>
      </section>

      {/* СЕКЦИЯ КОНТАКТЫ */}
      <section className="block contacts-section" id="contacts">
        <div className="contacts-content">
          <h2 className="contacts-title">Контакты</h2>
          
          <div className="contacts-grid">
            {/* ЛЕВАЯ КОЛОНКА - ИНФОРМАЦИЯ */}
            <div className="contacts-info">
              <div className="contact-item">
                <div className="contact-icon">📱</div>
                <div className="contact-text">
                  <h3>Телефон</h3>
                  <a href="tel:+77475555555">+7 (747) 555-55-55</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">💬</div>
                <div className="contact-text">
                  <h3>WhatsApp</h3>
                  <a href="https://wa.me/77475555555" target="_blank" rel="noopener noreferrer">
                    Написать в WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✈️</div>
                <div className="contact-text">
                  <h3>Telegram</h3>
                  <a href="https://t.me/autopark" target="_blank" rel="noopener noreferrer">
                    @autopark
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-text">
                  <h3>Email</h3>
                  <a href="mailto:info@autopark.kz">info@autopark.kz</a>
                </div>
              </div>
            </div>

            {/* ПРАВАЯ КОЛОНКА - КАРТА */}
            <div className="contacts-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.5789546362893!2d71.46948!3d51.16124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38698b4c4c4c4c4d%3A0x4c4c4c4c4c4c4c4c!2sAlmaty%2C%20Kazakhstan!5e0!3m2!1sen!2skz!4v1234567890"
                width="100%"
                height="500"
                style={{ border: 'none', borderRadius: '16px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
