import React from "react";

function Header() {
  return (
    <div className="dream-travel-container">
      <header className="header">
        <div className="logo">
          Vietnam <span className="heart">❤</span>
        </div>
        <nav className="nav-menu">
          <a href="https://www.instagram.com/@vietnamtravelaway ">
            ПОДБОР ТУРА
          </a>
          <a href="#">ГОРЯЩИЕ ТУРЫ</a>
          <a href="#">СТРАНЫ</a>
          <a href="#">ОТЕЛИ</a>
        </nav>
        <div className="header-actions">
          <a href="tel:+996707986545" className="phone-icon">
            📞
          </a>
        </div>
      </header>

      <div className="overlay">
        <h1 className="title">ПУТЕШЕСТВИЯ МЕЧТЫ</h1>
        <p className="subtitle">ВЫБЕРИ СВОЮ</p>
        <div className="form-container">
          <input type="text" placeholder="Откуда" defaultValue="" />
          <input type="text" placeholder="Куда" />
          <input type="date" />
          <select>
            <option>9 - 12 ночей</option>
            <option>5 - 8 ночей</option>
            <option>13+ ночей</option>
          </select>
          <select>
            <option>2 + 0</option>
            <option>2 + 1</option>
            <option>1 + 1</option>
          </select>
          <button className="submit-button">ПОДОБРАТЬ</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
