import './App.css'
import banquet from './assets/banquethall.jpg';
import bridal from './assets/bridal.jpg';
import caterers from './assets/caterers.jpg';
import parlours from './assets/parlours.jpg';
import spa from './assets/spa.jpg';
import saloon from './assets/saloon.jpg';
import ac from './assets/ac.jpg';
import car from './assets/car.jpg';
import bike from './assets/bike.jpg';
import movies from './assets/movies.jpg';
import grocery from './assets/grocery.jpg';
import electronics from './assets/electronics.jpg';

function App() {

  return (
    <>
    <div className="container">
      <div className="top">
        <div className="top-left">
          <h2>Wedding Requisites</h2>
          <div className="image">
            <div className="box">
              <img src={banquet} alt="Banquet Hall"/>
              <p>Banquet Halls</p>
            </div>
            <div className="box">
              <img src={bridal} alt="Bridal Requisite"/>
              <p>Bridal Requisite</p>
            </div>
            <div className="box">
              <img src={caterers} alt="Caterers"/>
              <p>Caterers</p>
            </div>
          </div>
        </div>
        <div className="top-right">
          <h2>Beauty & Spa</h2>
          <div className="image">
            <div className="box">
              <img src={parlours} alt="Beauty Parlours"/>
              <p>Beauty Parlours</p>
            </div>
            <div className="box">
              <img src={spa} alt="Spa & Massages"/>
              <p>Spa & Massages</p>
            </div>
            <div className="box">
              <img src={saloon} alt="Salonns"/>
              <p>Salons</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <h2>Repairs & Services</h2>
          <div className="image">
            <div className="box">
              <img src={ac} alt="AC Service"/>
              <p>AC Service</p>
            </div>
            <div className="box">
              <img src={car} alt="Car Service"/>
              <p>Car Service</p>
            </div>
            <div className="box">
              <img src={bike} alt="Bike Service"/>
              <p>Bike Service</p>
            </div>
          </div>
        </div>
        <div className="bottom-right">
          <h2>Daily Needs</h2>
          <div className="image">
            <div className="box">
              <img src={movies} alt="Movies"/>
              <p>Movies</p>
            </div>
            <div className="box">
              <img src={grocery} alt="Grocery"/>
              <p>Grocery</p>
            </div>
            <div className="box">
              <img src={electronics} alt="Elecronics"/>
              <p>Electronics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
