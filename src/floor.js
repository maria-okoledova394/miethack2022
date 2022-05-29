import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 
import StudGorod from "./images/StudGorod.svg"

function Floor() {

    return (
<body>
    <div class="page">
        <main>
            <header class="header">
                <img class="header__logo" src={StudGorod} />
                <div class="lead">
                    <p class="lead__subtitle_floor">Этаж 7</p>
                    <Link class="link" to='/' target="_self"><button class="lead__button">На главную страницу</button></Link>
                </div>
            </header>

              <section class="housing">
                <h2 class="housing__title">Выберите комнату</h2>
                <div class="table">
                <Link to='room' className="link" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 1</h4>
                        </div>
                    </Link>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 2</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 3</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 4</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 5</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 6</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 7</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 8</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 9</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 10</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 11</h4>
                        </div>
                    </a>
                    <a class="link" href="/room.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Комната 12</h4>
                        </div>
                    </a>
                </div>
              </section>
        </main>
        <footer class = 'footer'></footer>
    </div>
</body>
    )
  }
  
  export default Floor;