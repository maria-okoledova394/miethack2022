import React from 'react';
import './App.css';

import StudGorod from "./images/StudGorod.svg"
import Ilya from "./images/photo_2022-05-29_14-16-21.jpg"
import { Link } from 'react-router-dom'; 

function Student_room() {

    return (
<body>
    <div class="page">
        <main>
            <header class="header">
                <img class="header__logo" src={StudGorod} />
                <div class="lead">
                    <p class="lead__subtitle_floor">Карточка студента</p>
                    <Link class="link" to="/"><button class="lead__button"  target="_self">На главную страницу</button></Link>
                </div>
            </header>

            <div class="search">
                <h2 class="search__main-title">Информация о студенте</h2>
                <img src = {Ilya} class="student__photo" />
                <p class="search__subtitle">ФИО: Колобов Илья Владимирович</p>
                <p class="search__subtitle">Номер карточки: 777844</p>
                <p class="search__subtitle">Дата рождения: 29.07.2001</p>
                <p class="search__subtitle">Номер приказа о предоставлении общежития: 2213777</p>
                <p class="search__subtitle">Номер приказа о зачислении: 880501</p>
                <p class="search__subtitle">Дата зачисления: 14.07.2020</p>
                <p class="search__subtitle">Место рождения: г. Ярославль</p>
                <p class="search__subtitle">Адрес проживания: ул. Юности, 11, Зеленоград, Москва</p>
              </div>

        </main>
        <footer class = 'footer'></footer>
    </div>
</body>
    )
  }
  
  export default Student_room;