import React from "react";
import "./main.scss";

export const Main = () => {
  return (
    <div className="main">
      <header className="header">
        <span className="header__title">header</span>
      </header>
      <div className="content">
        <div className="content__flex">
          <div className="content__one">
            <div className="content__genius">
              Гений непредвзято понимает под собой конфликт. Закон внешнего
              мира, очевидно, реально подчеркивает аксиоматичный здравый смысл.
              Культ джайнизма включает в себя поклонение Махавире и другим
              тиртханкарам, поэтому закон исключённого третьего индуцирует
              изоморфный ротор.
            </div>
            <div className="content__moreno">
              <div className="content__item">Чувство однократно</div>
              <div className="content__item">Морено</div>
            </div>
          </div>
          <div className="content__two">
            <div className="content__workers">
              <div className="content__workers_item">Наши сотрудники</div>
              <div className="content__workers_item">
                Просветляет понимающий тест
              </div>
              <div className="content__workers_item">Конформизм</div>
            </div>
            <div className="content__introjection">
              <div className="content__introjection_item">Интроекция</div>
              <div className="content__introjection_item">Наши сотрудники</div>
            </div>
          </div>
        </div>

        <div className="content__three">
          <div className="content__modern">
            <div className="content__modernItem">
              Понятие модернизации понимает механизм власти
            </div>
            <div className="content__modernItem content__modernItem_hover">
              Наши сотрудники
              <div className="content__circle">!</div>
            </div>
          </div>
          <div className="content__data">
            <div className="content__block">
              <span className="content__left">Фамилия</span>
              <span className="content__border"></span>
              <span className="content__right">Мамай</span>
            </div>
            <div className="content__block">
              <span className="content__left">Имя и отчество</span>
              <span className="content__border"></span>
              <span className="content__right">
                Станиславаленина Владимировна
              </span>
            </div>
            <div className="content__block">
              <span className="content__left">
                Номер полиса выдан заведомо ложный
              </span>
              <span className="content__border"></span>
              <span className="content__right">01354879</span>
            </div>
            <div className="content__block">
              <span className="content__left">Дата рождения</span>
              <span className="content__border"></span>
              <span className="content__right">01.12.1976</span>
            </div>
            <div className="content__block">
              <span className="content__left">Телефон</span>
              <span className="content__border"></span>
              <span className="content__right">+79254218069</span>
            </div>
          </div>
        </div>
        <div className="content__four">
          <div className="content__lider">
            <div className="content__lider_item">Лидерство</div>
            <div className="content__lider_item">Невероятный гений</div>
          </div>
          <div className="content__dot">
            <div className="content__dot_item">Однако</div>
            <div className="content__dot_item">Точка перегиба</div>
            <div className="content__dot_item">Длина вектора</div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <span className="footer__title">footer</span>
      </footer>
    </div>
  );
};
