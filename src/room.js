import React from 'react';
import './App.css';
import { Link } from 'react-router-dom'; 
import StudGorod from "./images/StudGorod.svg"

function Room() {

    return (
<body>
    <div class="page">
        <main>
            <header class="header">
                <img class="header__logo" src={StudGorod} />
                <div class="lead">
                    <p class="lead__subtitle_floor">Имя 1</p>
                    <Link class="link" to="/"><button class="lead__button" target="_self">На главную страницу</button></Link>
                </div>
            </header>

              <section class="housing">
                <h2 class="housing__title">Выберите ученика</h2>
                <div class="table">
                    <a class="link" href="/student.html">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Голубкова Т.А.</h4>
                        </div>
                    </a>
                    <Link to='Student' className="link" target="_self">
                      <div class="table__cell_floor">
                        <h4 class="table__heading">Исламова А.Э.</h4>
                      </div>
                      </Link>
                    <a class="link" href="/student.html">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Лебедева А.А.</h4>
                        </div>
                    </a>
                    <a class="link" href="/student.html" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading">Прохорова И.П.</h4>
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
  
  export default Room;