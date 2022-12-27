import './App.css';
import Particle from './components/global/Particle';
// import HomeP from './pages/HomeP';

function App() {
  return (
    <div>
      <Particle/>
      <div className='flexbox-container'>
        <div className='boxes'>
          <div className='box'>
            <img src={require("./images/sokk.jpg")} alt=""/>
            <h1 class="box-text">Mõnnad helesinised sokid</h1>
            <p> Valmistatud ...... </p>
            <h3 class="box-text">32€</h3>
            <button>Lisa ostukorvi</button>
          </div>
          <div className='box'>
            <img src={require("./images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 2</div>
          </div>
          <div className='box'>
            <img src={require("./images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 3</div>
          </div>
          <div className='box'>
            <img src={require("./images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 4</div>
          </div>
          <div className='box'>
            <img src={require("./images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 5</div>
          </div>
          <div className='box'>
            <img src={require("./images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 6</div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
