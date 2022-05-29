import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 
import StudGorod from "./images/StudGorod.svg"
import Semen from "./images/photo_2022-05-29_12-36-16.jpg"

function Student_search() {

    return (
<body>
    <div class="page">
        <main>
            <header class="header">
                <img class="header__logo" src={StudGorod} />
                <div class="lead">
                    <p class="lead__subtitle_floor">Карточка студента</p>
                    <Link class="link" to='/'><button class="lead__button"  target="_self">На главную страницу</button></Link>
                </div>
            </header>

            <div class="search">
                <h2 class="search__main-title">Информация о студенте</h2>
                <img src = {Semen} class="student__photo" />
                <p class="search__subtitle">ФИО: Паршиков Семен Семенович</p>
                <p class="search__subtitle">Номер карточки: 201844</p>
                <p class="search__subtitle">Дата рождения: 27.03.2001</p>
                <p class="search__subtitle">Номер приказа о предоставлении общежития: 8753777</p>
                <p class="search__subtitle">Номер приказа о зачислении: 911501</p>
                <p class="search__subtitle">Дата зачисления: 07.07.2018</p>
                <p class="search__subtitle">Место рождения: г. Мичуринск</p>
                <p class="search__subtitle">Адрес проживания: ул. Юности, 11, Зеленоград, Москва</p>
              </div>

        </main>
        <footer class = 'footer'></footer>
    </div>
</body>
    )
  }
  
  export default Student_search;