import React, { useState } from 'react';
import './../pages.css';

interface Photo {
  id: number;
  url: string;
}

const LandCruiser200: React.FC = () => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const photos: Photo[] = [
    { id: 1, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09492_be48aaac74.jpg&w=1024&q=100' },
    { id: 2, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09491_186fb46a0d.jpg&w=1024&q=100' },
    { id: 3, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09493_7addf46fe2.jpg&w=1024&q=100' },
    { id: 4, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09494_42120b23b5.jpg&w=1024&q=100' },
    { id: 5, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09497_ce0f8460dc.jpg&w=1024&q=100' },
    { id: 6, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09498_5f106c7c79.jpg&w=1024&q=100' },
    { id: 7, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09499_f8eca38365.jpg&w=1024&q=100' },
    { id: 8, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09501_25541a2129.jpg&w=1024&q=100' },
    { id: 9, url: 'https://syndicateauto.kz/_next/image?url=https%3A%2F%2Fsyndicateauto.kz%2Fstrapi%2Fuploads%2Flarge_DSC_09496_5e848b60d7.jpg&w=1024&q=100' },
  ];

  const options = [
    { label: "день", text: "90.000 ₸ / сутки" },
    { label: "2-4 дня", text: "85.000 ₸ / сутки" },
    { label: "5-15 дней", text: "70.000 ₸ / сутки" },
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
          <h1 className="title">Toyota Land Cruiser 200 2021</h1>
          <p className="description">
            Аренда Toyota Land Cruiser 200 2021 по выгодным ценам с надежным дизайном и внедорожными возможностями
          </p>

          <div className="specs-table">
            <div className="spec-item">
              <div className="spec-value">7 мест</div>
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
              <div className="spec-value">15 л/100 км</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Объем двигателя</div>
              <div className="spec-value">4.0L</div>
            </div>
            <div className="spec-item">
              <div className="spec-label">Год выпуска</div>
              <div className="spec-value">2021</div>
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
                    <td>7</td><td>240</td><td>4.0L</td><td>Внедорожник</td><td>Полный</td>
                    <td>8.6 сек</td><td>Черный</td><td>Черный</td><td>175 км/ч</td><td>Автомат</td>
                    <td>15.0 л/100 км</td><td>2021</td>
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
          <h2 className="block-title">Аренда Toyota Land Cruiser 200 2021 в Алматы</h2>
          <p className="description">
            Условия и цены на прокат автомобиля Toyota Land Cruiser 200, включая гибкие тарифы на разные сроки аренды, от одного дня до месяца, с возможностью онлайн-бронирования и подробной информацией о доступности в Алматы.
          </p>
          <div className="steps-container">
            <div className="step-island">
              <div className="step-number">01</div>
              <div className="island-header">Преимущества аренды в Алматы</div>
              <div className="island-body">Почему стоит выбрать Toyota Land Cruiser 200 для поездок по Алматы, благодаря его надежности, внедорожным возможностям и просторному салону с тёплым коричневым интерьером.</div>
            </div>
            <div className="step-island">
              <div className="step-number">02</div>
              <div className="island-header">Особенности автомобиля для аренды</div>
              <div className="island-body">Узнайте о ключевых характеристиках Toyota Land Cruiser 200 2021, таких как мощный двигатель, прочный кузов, высокотехнологичный салон с тёплым коричневым интерьером и адаптация к дорогам Алматы.</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandCruiser200;