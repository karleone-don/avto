import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToMainSection = (target: string) => {
    const selectorByTarget: Record<string, string> = {
      popular: '.main-page-block',
      catalog: '.main-page-block',
      'why-us': '#why-us',
      contacts: '#contacts',
    };

    const section = document.querySelector(selectorByTarget[target]);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    if (target === 'popular') {
      setTimeout(() => {
        const event = new CustomEvent('filterCatalog', { detail: 'popular' });
        window.dispatchEvent(event);
      }, 300);
    }
  };

  const handleMenuClick = (e: React.MouseEvent, target: string) => {
    e.preventDefault();

    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: target, filter: target === 'popular' ? 'popular' : undefined } });
      return;
    }

    scrollToMainSection(target);
  };

  const handleRequestClick = () => {
    window.dispatchEvent(new CustomEvent('openBookingModal', {
      detail: { showCarSelect: true },
    }));
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <a href="#/" className="logo-link">
          <img src="https://www.pngall.com/wp-content/uploads/13/Car-Logo-PNG-Picture.png" alt="Автопарк Logo" className="logo" />
        </a>

        <nav className="header-menu">
          <a href="#popular" className="menu-item" onClick={(e) => handleMenuClick(e, 'popular')}>Популярные</a>
          <a href="#catalog" className="menu-item" onClick={(e) => handleMenuClick(e, 'catalog')}>Каталог</a>
          <a href="#why-us" className="menu-item" onClick={(e) => handleMenuClick(e, 'why-us')}>Почему мы</a>
          <a href="#contacts" className="menu-item" onClick={(e) => handleMenuClick(e, 'contacts')}>Контакты</a>
        </nav>

        <div className="header-right">
          <a href="tel:+79999999999" className="phone-link">
            +7 (999) 999-99-99
          </a>
          <button className="request-button" onClick={handleRequestClick}>Оставить заявку</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
