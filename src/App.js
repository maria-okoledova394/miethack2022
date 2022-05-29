import logo from './logo.svg';
import './App.css';
import StudGorod from "./images/StudGorod.svg"
import EditForm from './form';
import Housing from './housing';
import Floor from './floor';
import Room from './room';
import Student from './student';
import Student_search from './student_search';
import Student_room from './studentroom';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

function App_main() {
  return (
    <Switch>
    <Route path="/" exact>
    <body>
      <div className="page">
          <main>
              <header className="header">
                  <img className="header__logo" src={StudGorod}/>
                  <div className="lead">
                      <p className="lead__subtitle">Система для работы с общежитием.</p>
                      <button className="lead__button">Заселить студентов</button>
                  </div>
              </header>

              <div className="search">
                  <h2 className="search__main-title">Найти информацию о заселении</h2>
                  <div className="search__flex">
                    <EditForm />
                  </div>
                </div>

                <section className="housing">
                  <h2 className="housing__title">Выберите корпус</h2>
                  <Link to='Housing' className="link" target="_self">
                    <div className="table__cell_centre">
                      <h4 className="table__heading_centre">Корпус 7</h4>
                    </div>
                  </Link>
                  <div className="table">
                  <Link to='Housing' className="link" target="_self">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 9</h4>
                      </div>
                    </Link>
                    <Link to='Housing' className="link" target="_self">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 11</h4>
                      </div>
                    </Link>
                    <Link to='Housing' className="link" target="_self">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 13</h4>
                      </div>
                    </Link>
                    <Link to='Housing' className="link" target="_self">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 15</h4>
                      </div>
                    </Link>
                  </div>
                </section>

                <footer className = 'footer'></footer>
          </main>
      </div>
    </body>
    </Route>
    <Route path="/housing">
      <Housing />
    </Route>
    <Route path="/floor">
      <Floor />
    </Route>
    <Route path="/room">
      <Room />
    </Route>
    <Route path="/student">
      <Student />
    </Route>
    <Route path="/studentsearch">
      <Student_search />
    </Route>
    <Route path="/studentroom">
      <Student_room />
    </Route>
  </Switch>
  );
}

export default App_main;
