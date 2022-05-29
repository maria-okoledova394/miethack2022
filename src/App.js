import logo from './logo.svg';
import './App.css';
import StudGorod from "./images/StudGorod.svg"
import EditForm from './form';

function App() {
  return (
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
                  <a href="./housing.html" className="link" target="_self">
                    <div className="table__cell_centre">
                      <h4 className="table__heading_centre">Корпус 7</h4>
                    </div>
                  </a>
                  <div className="table">
                    <a className="link" target="_blank" href="/housing.html">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 9</h4>
                      </div>
                    </a>
                    <a className="link" target="_blank" href="/housing.html">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 11</h4>
                      </div>
                    </a>
                    <a className="link" target="_blank" href="/housing.html">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 13</h4>
                      </div>
                    </a>
                    <a className="link" target="_blank" href="/housing.html">
                      <div className="table__cell_centre">
                        <h4 className="table__heading_centre">Корпус 15</h4>
                      </div>
                    </a>
                  </div>
                </section>

                <footer className = 'footer'></footer>
          </main>
      </div>
    </body>
  );
}

export default App;
