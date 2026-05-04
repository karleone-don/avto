import React, { useState } from 'react';
import './../pages.css';

interface Photo {
  id: number;
  url: string;
}

const BenzE300: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const photos: Photo[] = [
    { id: 1, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09504_66bd651bbc.jpg&w=1024&q=100' },
    { id: 2, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09505_75ef22fdeb.jpg&w=1024&q=100' },
    { id: 3, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09503_75d6fd667f.jpg&w=1024&q=100' },
    { id: 4, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09507_5b23b26c1c.jpg&w=1024&q=100' },
    { id: 5, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09509_7e54aae2fc.jpg&w=1024&q=100' },
    { id: 6, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09510_f68c45a333.jpg&w=1024&q=100' },
    { id: 7, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09512_6374522205.jpg&w=1024&q=100' },
    { id: 8, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09515_3bc8c4735d.jpg&w=1024&q=100' },
    { id: 9, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09514_99aab4b366.jpg&w=1024&q=100' },
    { id: 10, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09516_88c05630b5.jpg&w=1024&q=100' },
  ];

  const options = [
    { label: "день", text: "120.000 ₸ / сутки" },
    { label: "2-4 дня", text: "110.000 ₸ / сутки" },
    { label: "5-15 дней", text: "90.000 ₸ / сутки" },
    { label: "16-30 дней", text: "60.000 ₸ / сутки" }
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
          <h1 className="title">Mercedes-Benz E300 2023</h1>
          <p className="description">
            Аренда Mercedes-Benz E300 2023 по выгодным ценам с мощным двигателем 3.0, обновленным дизайном и премиальным комфортом
          </p>

          <div className="specs-table">
            <div className="spec-item">
              <div className="spec-value">5 мест</div>
            </div>
            <div className="spec-item">
              <div className="spec-value">Полный привод</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">КПП</div>
              <div className="spec-value">Автомат</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Расход</div>
              <div className="spec-value">11.1 л/100 км</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Объем двигателя</div>
              <div className="spec-value">3.0L</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Год выпуска</div>
              <div className="spec-value">2023</div>
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
                    <td>5</td><td>285</td><td>3.0L</td><td>Внедорожник</td><td>Полный</td>
                    <td>6.2 сек</td><td>Серый</td><td>Черный</td><td>250 км/ч</td><td>Автомат</td>
                    <td>11.1 л/100 км</td><td>2023</td>
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
          <h2 className="block-title">Аренда Mercedes-Benz E300 2023 в Алматы</h2>
          <p className="description">
            Условия и цены на прокат обновленного Mercedes-Benz E300 с двигателем 3.0, включая гибкие тарифы на разные сроки аренды, от одного дня до месяца, с возможностью онлайн-бронирования и подробной информацией о доступности в Алматы.
          </p>
          <div className="steps-container">
            <div className="step-island">
              <div className="step-number">01</div>
              <div className="island-header">Преимущества аренды в Алматы</div>
              <div className="island-body">Почему стоит выбрать Mercedes-Benz E300 2023 для поездок по Алматы: благодаря его динамичному 3.0-литровому двигателю, интеллектуальному полному приводу, премиальному комфорту и роскошному коричневому интерьеру.</div>
            </div>
            <div className="step-island">
              <div className="step-number">02</div>
              <div className="island-header">Особенности автомобиля для аренды</div>
              <div className="island-body">Узнайте о ключевых характеристиках Mercedes-Benz E300 2023: мощный бензиновый двигатель V6, улучшенная аэродинамика, высокотехнологичный салон с отделкой из натуральной кожи и адаптивная подвеска для идеальных поездок по дорогам Алматы.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenzE300;