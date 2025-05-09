import React from "react";
import Image1 from "../assets/img/Vena.jpg";
import Image2 from "../assets/img/Kappadokia.jpg";
import Image3 from "../assets/img/Rim.jpg";
import Image4 from "../assets/img/Dubai.jpg";
import Image5 from "../assets/img/Florensia.jpg";
import Image6 from "../assets/img/Hotel.jpg";
import Image7 from "../assets/img/Hotell.jpg";
import Image8 from "../assets/img/Hotelll.jpg";
import Image9 from "../assets/img/NeHotel.jpg";
import Image10 from "../assets/img/Net.jpg";
import Image11 from "../assets/img/Vietnam.jpeg";
import Image12 from "../assets/img/Deti.webp";
import Image13 from "../assets/img/Otdyh.webp";
import Image14 from "../assets/img/Beach-Tropic.jpg";
import Image15 from "../assets/img/Kultura.jpeg";
import Image16 from "../assets/img/Semia.jpg";
import Image17 from "../assets/img/Dostoprim.jpeg";
import Image18 from "../assets/img/Nout.avif";
import Image19 from "../assets/img/Bassein.jpeg";

function Main() {
  return (
    <main>
      <section className="hot-tours">
        <h2>Горящие туры</h2>
        <p className="subtitle">Поймайте момент</p>
        <div className="tour-list">
          <div className="tour-card">
            <img src={Image1} alt="Вена" />
            <div className="tour-info">
              <h3>Вена</h3>
              <p>Австрия</p>
              <span>12–18 июля</span>
            </div>
          </div>
          <div className="tour-card">
            <img src={Image2} alt="Каппадокия" />
            <div className="tour-info">
              <h3>Каппадокия</h3>
              <p>Турция</p>
              <span>5–11 июня</span>
            </div>
          </div>
          <div className="tour-card">
            <img src={Image3} alt="Рим" />
            <div className="tour-info">
              <h3>Рим</h3>
              <p>Италия</p>
              <span>20–27 июня</span>
            </div>
          </div>
          <div className="tour-card">
            <img src={Image4} alt="Дубай" />
            <div className="tour-info">
              <h3>Дубай</h3>
              <p>ОАЭ</p>
              <span>13–19 июля</span>
            </div>
          </div>
          <div className="tour-card">
            <img src={Image5} alt="Флоренция" />
            <div className="tour-info">
              <h3>Флоренция</h3>
              <p>Италия</p>
              <span>7–14 августа</span>
            </div>
          </div>
        </div>
      </section>
      <section id="about">
        <section className="popular-hotels">
          <h2>Популярные отели</h2>
          <p className="subtitle">Уют и роскошь в лучших отелях мира</p>
          <div className="hotel-list">
            <div className="hotel-card">
              <img src={Image6} alt="Marquis" />
              <div className="hotel-info">
                <h3>MARQUIS</h3>
              </div>
            </div>
            <div className="hotel-card">
              <img src={Image7} alt="Ritz-Carlton" />
              <div className="hotel-info">
                <h3>RITZ-CARLTON</h3>
                <p>отдых класса люкс</p>
              </div>
            </div>
            <div className="hotel-card">
              <img src={Image8} alt="Villa Flori Como" />
              <div className="hotel-info">
                <h3>VILLA FLORI COMO</h3>
                <p>роскошь в итальянском стиле</p>
              </div>
            </div>
            <div className="hotel-card">
              <img src={Image9} alt="Ikos Dassia" />
              <div className="hotel-info">
                <h3>IKOS DASSIA</h3>
                <p>улётная атмосфера</p>
              </div>
            </div>
            <div className="hotel-card">
              <img src={Image10} alt="JW Marriott" />
              <div className="hotel-info">
                <h3>JW MARRIOTT</h3>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="desert-section">
        <div className="form-container">
          <img src={Image11} alt="" />
          <div className="text-block">
            <h2>
              НЕ ОПРЕДЕЛИЛИСЬ <br />
              <span>С ВЫБОРОМ?</span>
            </h2>
            <p>
              Оставьте свой номер и наш специалист поможет <br />
              вам с подбором тура
            </p>
          </div>

          <form className="form-inputs">
            <input type="text" placeholder="Имя" />
            <input type="tel" placeholder="Телефон" />
            <button type="submit">ОТПРАВИТЬ</button>
          </form>
        </div>
      </div>
      <div className="reviews-section">
        <div className="reviews-header">
          <h3 className="reviews-subtitle">Reviews</h3>
          <h2 className="reviews-title">ОТЗЫВЫ</h2>
          <p className="reviews-description">
            ВПЕЧАТЛЕНИЯ НАШИХ ПУТЕШЕСТВЕННИКОВ
          </p>
        </div>

        <div className="reviews-grid">
          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-author">МАРИНА ИЗ МОСКВЫ</div>
            <div className="review-trip">
              Летала в Париж 20.07.23 в отель Ritz-Carlton
            </div>
            <p className="review-text">
              Невероятное путешествие! Спасибо за организацию моей поездки в
              Париж. Всё было просто идеально – от отеля до экскурсий. Не могу
              дождаться следующего приключения с вашей турфирмой!
            </p>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-author">АЛЕКСАНДР ИЗ САНКТ-ПЕТЕРБУРГА</div>
            <div className="review-trip">
              Летал в Таиланд 10.05.23 в отель The Silver Palm Wellness Resort
            </div>
            <p className="review-text">
              Путешествие в Таиланд оказалось невероятным благодаря вашим
              услугам. Профессиональное планирование, отличные рекомендации по
              местам для посещения и великолепный выбор отелей. Обязательно
              вернусь к вам снова.
            </p>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-author">ЕКАТЕРИНА ИЗ ЕКАТЕРИНБУРГА</div>
            <div className="review-trip">
              Летала на Бали 12.03.23 в отель Hanging Gardens
            </div>
            <p className="review-text">
              Спасибо за незабываемый отдых на Бали! Всё было под контролем,
              начиная с бронирования и заканчивая возвращением домой. Отличная
              коммуникация и внимание к деталям создали идеальное путешествие.
            </p>
          </div>

          <div className="review-card">
            <div className="review-stars">★★★★★</div>
            <div className="review-author">ОЛЬГА ИЗ НОВОСИБИРСКА</div>
            <div className="review-trip">
              Летала в Японию 06.02.23 в отель Nishimuraya Honkan
            </div>
            <p className="review-text">
              Ваша турфирма стала моим надёжным проводником в мир :) После
              поездки в Японию я почувствовала себя настоящим путешественником.
              Отличная организация, забота о клиентах и интересные маршруты
              делают вас лучшими! Большое спасибо!
            </p>
          </div>
        </div>
      </div>
      <section className="news-section">
        <h2 className="news-title">НОВОСТИ</h2>
        <p className="news-subtitle">СОБЫТИЯ В МИРЕ ТУРИЗМА</p>
        <div className="news-grid">
          <div className="news-card">
            <img src={Image12} alt="" />
            <div className="news-text">
              Отдых с детьми: о чём нужно помнить в путешествии
            </div>
          </div>
          <div className="news-card">
            <img src={Image13} alt="" />
            <div className="news-text">
              Топ-10 уникальных и завораживающих мест Азии
            </div>
          </div>
          <div className="news-card">
            <img src={Image14} alt="" />
            <div className="news-text">
              Отдых в Вьетнаме: природа и экология
            </div>
          </div>
          <div className="news-card">
            <img src={Image15} alt="" />
            <div className="news-text">История, культура и храмы Вьетнама</div>
          </div>
          <div className="news-card">
            <img src={Image16} alt="" />
            <div className="news-text">
              Лучшие направления для семейного отдыха
            </div>
          </div>
          <div className="news-card">
            <img src={Image17} alt="" />
            <div className="news-text">
              Необычные достопримечательности для всех
            </div>
          </div>
        </div>
      </section>
      <section className="about-us">
        <div className="about-header">
          <h2>О НАС</h2>
          <p className="subtitle">Вдохновляем мир на путешествия</p>
        </div>

        <div className="about-content">
          <div className="text-block">
            <p className="big-letter">
              <span>МЫ</span> — команда профессионалов, влюблённых в искусство
              путешествий...
            </p>
            <p>
              Наша миссия — сделать путешествия увлекательными и
              незабываемыми...
            </p>
          </div>
          <div className="images">
            <img src={Image18} alt="Женщина с ноутбуком" className="image" />
          </div>
        </div>

        <div className="about-extra">
          <img src={Image19} alt="Закат у бассейна" className="image" />
          <p>
            Мы гордимся тем, как наши клиенты открывают для себя новые
            горизонты...
          </p>
        </div>

        <footer className="about-footer">
          <div className="contacts">
            <p>СВЯЖИТЕСЬ С НАМИ</p>
            <div className="social-icons"></div>
          </div>
          <div className="info">
            <p>
              <strong>Контакты</strong>
              <br />
              <a href="tel:+996707986545">+996 707 986 545</a>
              <br />
            </p>
            <p>
              <strong>Адрес</strong>
              <br />
              Бишкек, Байтик Баатыр 74
            </p>
          </div>
        </footer>
      </section>
    </main>
  );
}

export default Main;
