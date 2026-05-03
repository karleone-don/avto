import React, { useState } from 'react';
import './../pages.css';

interface Photo {
  id: number;
  url: string;
}

const KiaCarnival2024: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const photos: Photo[] = [
    { id: 1, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01639_e98c6ee100.jpg&w=1024&q=100' },
    { id: 2, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01633_706df52ac6.jpg&w=1024&q=100' },
    { id: 3, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01644_952d61c7d2.jpg&w=1024&q=100' },
    { id: 4, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01646_10a16426c6.jpg&w=1024&q=100' },
    { id: 5, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01649_2ee6cbe648.jpg&w=1024&q=100' },
    { id: 6, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01648_ce81d8a9b6.jpg&w=1024&q=100' },
    { id: 7, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01650_ed355c02ee.jpg&w=1024&q=100' },
    { id: 8, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01660_3722931951.jpg&w=1024&q=100' },
    { id: 9, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01658_162063ed2c.jpg&w=1024&q=100' },
    { id: 10, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01661_2e0a945c87.jpg&w=1024&q=100' },
    { id: 11, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01655_9beda5aa18.jpg&w=1024&q=100' },
    { id: 12, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01652_0056cff453.jpg&w=1024&q=100' },
    { id: 13, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01656_96ecb85179.jpg&w=1024&q=100' },
    { id: 14, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01664_5a0504768f.jpg&w=1024&q=100' },
    { id: 15, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01653_f0d8bca6e4.jpg&w=1024&q=100' },
    { id: 16, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_01662_354c578b29.jpg&w=1024&q=100' },
  ];

  const options = [
    { label: "день", text: "65.000 ₸ / сутки" },
    { label: "2-4 дня", text: "60.000 ₸ / сутки" },
    { label: "5-15 дней", text: "50.000 ₸ / сутки" },
    { label: "16-30 дней", text: "40.000 ₸ / сутки" }
  ];

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="zeekr-container">
      {/* БЛОК 1 - ВЕРНУЛ КАК БЫЛО */}
      <section className="block block-1">
        <div className="photos-section">
          <div className="album-container">
            <img src={photos[currentPhotoIndex].url} alt="Album" className="album-photo" />
            <button className="nav-button prev" onClick={handlePrevPhoto}>‹</button>
            <button className="nav-button next" onClick={handleNextPhoto}>›</button>
            <div className="photo-counter">{currentPhotoIndex + 1} / {photos.length}</div>
          </div>

          <div className="preview-photos">
            {photos.slice(0, 4).map((photo, idx) => (
              <div key={photo.id} className="preview-wrapper">
                <img
                  src={photo.url}
                  alt={`Preview ${idx}`}
                  className="preview-photo"
                  onClick={() => setCurrentPhotoIndex(idx)}
                />

                {/* Оверлей только на 4-й фотке */}
                {idx === 3 && photos.length > 4 && (
                  <div className="overlay">+{photos.length - 3}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="content-section">
          <h1 className="title">Kia Carnival 2024</h1>
          <p className="description">
            Отличный выбор для тех, кому нужен просторный, комфортный и надежный автомобиль
          </p>

          <div className="specs-table">
            <div className="spec-item">
              <div className="spec-value">8 мест</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">Передний привод</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">КПП</div>
              <div className="spec-value">Автомат</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Расход</div>
              <div className="spec-value">10.8 л/100 км</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Объем двигателя</div>
              <div className="spec-value">3.5L</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Год выпуска</div>
              <div className="spec-value">2024</div>
            </div>
          </div>

          <p className="text-section">Выберите тариф:</p>

          <div className="options-container">
            {options.map((option, idx) => (
              <button
                key={idx}
                className={`option-button ${selectedOption === idx ? 'selected' : ''}`}
                onClick={() => setSelectedOption(idx)}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="price-display">
            {options[selectedOption].text}
          </p>

          <button className="action-button">Забронировать</button>
        </div>
      </section>

      {/* БЛОК 2 */}
      <section className="block block-2">
        <div className="block-content">
          <h2 className="block-title">Подробная информация про авто</h2>
          <div className="tabs">
            <button className={`tab-button ${activeTab === 0 ? "active" : ""}`} onClick={() => setActiveTab(0)}>
              <span>Технические характеристики</span>
            </button>
            <button className={`tab-button ${activeTab === 1 ? "active" : ""}`} onClick={() => setActiveTab(1)}>
              <span>Условия аренды</span>
            </button>
          </div>

          {activeTab === 0 ? (
            <div className="specs-big-wrapper no-scrollbar">
              <table className="specs-grid-table">
                <thead>
                  <tr>
                    <th>Места</th><th>Лошадиные силы</th><th>Двигатель</th><th>Тип</th><th>Привод</th>
                    <th>Разгон</th><th>Цвет</th><th>Цвет Салона</th><th>Макс.скорость</th><th>КПП</th>
                    <th>Расход</th><th>Год выпуска</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>8</td><td>294</td><td>3.5L</td><td>Минивэн</td><td>Передний</td>
                    <td>8.0 сек</td><td>Белый</td><td>Бежевый</td><td>210 км/ч</td><td>Автомат</td>
                    <td>10.8 л/100 км</td><td>2024</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-islands-container">
              {/* Колонки с оригинальным текстом */}
              <div className="island-column">
                <div className="island">
                  <div className="island-header">ЗАЛОГ ОБЯЗАТЕЛЕН</div>
                  <div className="island-body">Возврат — в течение 5 рабочих дней (после проверки штрафов)<br/><br/>
                    Сумма зависит от класса авто и маршрута (город / природа / межгород):<br/>
                    Эконом: от 50 000 ₸<br/>
                    Бизнес / Люкс: от 100 000 ₸ и выше</div>
                </div>
                <div className="island">
                  <div className="island-header">Суточный лимит пробега — 200 км</div>
                  <div className="island-body">При превышении: доплата 100–350₸ за км (в зависимости от авто).</div>
                </div>
                <div className="island">
                  <div className="island-header">Возраст и стаж:</div>
                  <div className="island-body">Минимум 21 год, стаж — от 2 лет<br/>
                    Бизнес / Люкс: от 25 лет, стаж от 3–5 лет<br/><br/>
                    Передача управления запрещена посторонним. За любое последствие — ответственность арендатора.</div>
                </div>
              </div>

              <div className="island-column">
                <div className="island">
                  <div className="island-header">Ограничение скорости:</div>
                  <div className="island-body">Город: до 60 км/ч<br/>Трасса: до 140 км/ч<br/><br/>
                    Клиент несёт полную ответственность за авто на весь срок аренды вне зависимости от обстоятельств.</div>
                  <div className="island-header" style={{ marginTop: '20px' }}>Вернуть желательно в таком же виде</div>
                  <div className="island-body">Если не успеваете — мы всё сделаем за вас и удержим это из залога.<br/><br/>
                    Легковой: от 5000 ₸<br/>Кроссовер/джип: до 7000 ₸</div>
                </div>
                <div className="island island-danger">
                  <div className="island-header">Заправка только бензином не ниже АИ-95</div>
                  <div className="island-body danger-wrap">
                    <span className="text-critical">КУРЕНИЕ В САЛОНЕ ЗАПРЕЩЕНО!</span>
                    Штраф — 100 000 ₸
                  </div>
                </div>
              </div>

              <div className="island-column">
                <div className="island">
                  <div className="island-header">Арендатор всегда должен быть на связи.<br/><br/>
                    О продлении сообщить минимум за 3 часа до окончания аренды.</div>
                </div>
                <div className="island">
                  <div className="island-header">Минимальная аренда — 1 сутки.</div>
                  <div className="island-body">Почасовое аренда: 1 час = 10% от суточной стоимости.</div>
                </div>
                <div className="island">
                  <div className="island-header">Досрочная аренда:</div>
                  <div className="island-body">Авто предоставляется на осмотр сотруднику не позже 15 минут от времени аренды.</div>
                </div>
                <div className="island">
                  <div className="island-header">Все штрафы ПДД - оплачивает клиент.</div>
                </div>
                <div className="island">
                  <div className="island-header">Доставка авто по городу от 5000 до 10 000 ₸</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* БЛОК 3 */}
      <section className="block block-3">
        <div className="block-content">
          <h2 className="block-title">Аренда Kia Carnival 2024 в Алматы</h2>
          <p className="description">
            Аренда Kia Carnival 2024 в Алматы — это отличный выбор для тех, кому нужен просторный, комфортный и надежный автомобиль для семьи, деловых поездок или путешествий большой компанией. Современный минивэн с премиальным дизайном и вместительным салоном на 7–8 мест сочетает комфорт бизнес-класса, технологии нового поколения и высокий уровень безопасности.
          </p>
          <div className="steps-container">
            <div className="step-island">
              <div className="step-number">01</div>
              <div className="island-header">Преимущества аренды Kia Carnival 2024</div>
              <div className="island-body">Kia Carnival 2024 — это сочетание премиального уровня комфорта и практичности. Вместительный салон с трансформацией сидений обеспечивает удобное размещение большой семьи или группы коллег. Автомобиль отличается мягким ходом, экономичным двигателем и современными мультимедийными системами. Просторный багажный отсек позволяет взять с собой все необходимое для путешествий, а расширенный набор систем безопасности делает поездку безопасной и приятной.</div>
            </div>
            <div className="step-island">
              <div className="step-number">02</div>
              <div className="island-header">Особенности Kia Carnival 2024</div>
              <div className="island-body">Автомобиль выделяется современным дизайном, просторным салоном и удобством для дальних поездок. Kia Carnival оснащён мультимедийной системой, климат-контролем для всех рядов и комфортными креслами, которые создают атмосферу премиум-класса. Машина адаптирована для поездок по городским улицам и загородным маршрутам, а высокий уровень шумоизоляции делает каждую поездку максимально комфортной. Это идеальный вариант для аренды, если нужен надежный и просторный автомобиль для больших компаний и семейных путешествий.</div>
            </div>
            <div className="step-island">
              <div className="step-number">03</div>
              <div className="island-header">Цены на аренду Kia Carnival 2024</div>
              <div className="island-body">Стоимость аренды Kia Carnival 2024 в Алматы начинается от ₸35 000 в сутки. Доступны различные тарифы: краткосрочная аренда на 1–2 дня, аренда на неделю и долгосрочные пакеты. Все условия максимально прозрачные и удобные, а бронирование онлайн позволяет оформить аренду в любое время.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KiaCarnival2024;