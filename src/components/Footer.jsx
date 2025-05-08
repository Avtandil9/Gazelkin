import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        Vietnam <span className="heart">♥️</span>
      </div>
      <nav className="footer-nav">
        <a href="#">Подбор тура</a>
        <a href="#">Горящие туры</a>
        <a href="#">Отели и отзывы</a>
        <a href="#">Оплата</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
      </nav>
      <div className="socials">
        <a href="#">VK</a>
        <a href="https://www.instagram.com/kochevnik.kg" target="_blank">
          Instagram
        </a>
        <a href="#">Facebook</a>
      </div>
    </footer>
  );
}

export default Footer;
