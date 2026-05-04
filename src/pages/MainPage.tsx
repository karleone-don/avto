import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { carsData } from './carsData';
import './pages.css';

const MainPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedPriceOption, setSelectedPriceOption] = useState<{ [key: string]: number }>(() => {
    const initialState: { [key: string]: number } = {};
    carsData.forEach(car => {
      initialState[car.id] = 0;
    });
    return initialState;
  });

  const categoryLabels: { [key: string]: string } = {
    all: 'Все',
    econom: 'Эконом',
    comfort: 'Комфорт',
    'comfort+': 'Комфорт+',
    popular: 'Популярное',
  };

  const filteredCars = activeFilter === 'all'
    ? carsData
    : carsData.filter(car => car.category === activeFilter);

  return (
    <div className="zeekr-container">
      <div className="block main-page-block">
        <div className="main-page-content">
          <h1 className="main-title">Наша коллекция автомобилей</h1>
          
          <div className="filter-buttons">
            {['all', 'econom', 'comfort', 'comfort+', 'popular'].map(filter => (
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
              <div key={car.id} className="car-card">
                <img src={car.image} alt={car.name} className="car-image" />
                <div className="car-info">
                  <h3 className="car-name">{car.name}</h3>
                  <span className="car-category">{categoryLabels[car.category]}</span>
                  
                  <div className="price-display">
                    {car.options[selectedPriceOption[car.id] ?? 0].text}
                  </div>
                  
                  <div className="price-options">
                    {car.options.map((option, idx) => (
                      <button
                        key={idx}
                        className={`price-button ${selectedPriceOption[car.id] === idx ? 'active' : ''}`}
                        onClick={() => setSelectedPriceOption({ ...selectedPriceOption, [car.id]: idx })}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  
                  <Link to={car.path} className="view-button">Подробнее</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
