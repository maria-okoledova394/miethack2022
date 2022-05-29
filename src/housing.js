import React from 'react';
import Floor from './floor';
import { Link } from 'react-router-dom'; 
import './App.css';
import StudGorod from "./images/StudGorod.svg"

import { Route, Switch, useHistory } from 'react-router-dom';

function Housing() {

    return (
<body>
    <div class="page">
        <main>
            <header class="header">
                <img class="header__logo" src={StudGorod}/>
                <div class="lead">
                    <p class="lead__subtitle_floor">Корпус 7</p>
                    <Link class="link" to='/'><button class="lead__button" target="_self">На главную страницу</button></Link>
                </div>
            </header>

              <section class="housing">
                <h2 class="housing__title">Выберите этаж</h2>
                <div class="table">
                <Link to='floor' className="link" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Этаж 1</h4>
                        </div>
                    </Link>
                    <Link to='floor' className="link" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Этаж 2</h4>
                        </div>
                    </Link>
                    <Link to='floor' className="link" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Этаж 3</h4>
                        </div>
                    </Link>
                    <Link to='floor' className="link" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Этаж 4</h4>
                        </div>
                    </Link>
                    <Link to='floor' className="link" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Этаж 5</h4>
                        </div>
                    </Link>
                    <Link to='floor' className="link" target="_self">
                        <div class="table__cell_floor">
                          <h4 class="table__heading" target="_self">Этаж 6</h4>
                        </div>
                    </Link>
                </div>
              </section>
        </main>
        <footer class = 'footer'></footer>
    </div>
</body>
    )
  }
  
  export default Housing;