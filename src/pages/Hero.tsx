import '../styles/Hero.css';

const Hero: React.FC = () => {
  const handleScrollToCatalog = () => {
    const catalogSection = document.querySelector('.main-page-block');
    if (catalogSection) {
      catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-background">
        <img
          src="https://media.istockphoto.com/id/907671144/photo/new-black-metallic-sedan-car-in-spotlight-modern-desing-brandless.jpg?s=612x612&w=0&k=20&c=21WCXCFFvFYtO9-0UiAhNH8xaC8p12IT9_dNHqm9klk="
          alt="Premium Car"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Аренда премиальных автомобилей в один клик</h1>
          <p className="hero-subtitle">Быстро. Надёжно. Без лишних вопросов.</p>
          <button className="hero-button" onClick={handleScrollToCatalog}>Выбрать автомобиль</button>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;
