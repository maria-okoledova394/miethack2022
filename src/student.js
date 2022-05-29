import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 
import StudGorod from "./images/StudGorod.svg"
import Aida from "./images/photo_2022-05-29_12-36-50.jpg"

function Student() {

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
                        <img src = {Aida} class="student__photo" />
                        <p class="search__subtitle">ФИО: Исламова Аида Эдгаровна</p>
                        <p class="search__subtitle">Номер карточки: 201944</p>
                        <p class="search__subtitle">Дата рождения: 12.10.1996</p>
                        <p class="search__subtitle">Номер приказа о предоставлении общежития: 5373777</p>
                        <p class="search__subtitle">Номер приказа о зачислении: 739501</p>
                        <p class="search__subtitle">Дата зачисления: 01.07.2017</p>
                        <p class="search__subtitle">Место рождения: п. Чишмы</p>
                        <p class="search__subtitle">Адрес проживания: ул. Юности, 11, Зеленоград, Москва</p>
                      </div>
        
                </main>
                <footer class = 'footer'></footer>
            </div>
        </body>
    )
  }
  
  export default Student;