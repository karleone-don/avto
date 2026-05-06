import React, { useEffect, useState } from 'react';
import '../styles/BookingModal.css';

interface BookingModalProps {
  isOpen: boolean;
  carName?: string;
  carId?: string;
  carOptions?: Array<{ id: string; name: string }>;
  showCarSelect?: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  carName = '',
  carId = '',
  carOptions = [],
  showCarSelect = false,
  onClose,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedCarId, setSelectedCarId] = useState(carId);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSelectedCarId(carId || carOptions[0]?.id || '');
    }
  }, [carId, carOptions, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setPhone('');
      setStartDate('');
      setEndDate('');
      setSelectedCarId(carId || carOptions[0]?.id || '');
      setSubmitted(false);
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  const selectedCarName = carOptions.find(car => car.id === selectedCarId)?.name || carName;
  const title = showCarSelect ? 'Оставить заявку' : `Забронировать ${selectedCarName}`;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <h2 className="modal-title">{title}</h2>

        {submitted ? (
          <div className="modal-success">
            <div className="success-icon">✓</div>
            <p>Ваша заявка принята!</p>
            <p>Мы свяжемся с вами в течение часа</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="booking-form">
            {showCarSelect && (
              <div className="form-group">
                <label htmlFor="car">Автомобиль</label>
                <select
                  id="car"
                  value={selectedCarId}
                  onChange={(e) => setSelectedCarId(e.target.value)}
                  required
                >
                  {carOptions.map(car => (
                    <option key={car.id} value={car.id}>
                      {car.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name">Ваше имя</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Иван Петров"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Телефон</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                placeholder="+7 (999) 999-99-99"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ваш@email.com"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">Дата начала</label>
                <input
                  type="date"
                  id="startDate"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="endDate">Дата окончания</label>
                <input
                  type="date"
                  id="endDate"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-button">Отправить заявку</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
