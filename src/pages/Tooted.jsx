import "../components/css/Tooted.css";

function Tooted() {
    return (
    <div>
      <div className='flexbox-container'>
        <div className='boxes'>
          <div className='box'>
            <img src={require("../images/sokk.jpg")} alt=""/>
            <h1 class="box-text">Mõnnad helesinised sokid</h1>
            <p> Valmistatud ...... </p>
            <h3 class="box-text">32€</h3>
            <br/>
            <button className="ostukorvinupp">Lisa ostukorvi</button>
          </div>
          <div className='box'>
            <img src={require("../images/sokk.jpg")} alt=""/>
            <h1 class="box-text">Mõnnad helesinised sokid</h1>
            <p> Puuvill 100% </p>
            <h3 class="box-text">32€</h3>
            <br/>
            <div className="nupud">
                <button className="ostukorvinupp">Lisa ostukorvi</button>
                <button className="ostukorvinupp">Vaata lisainfot</button>
            </div>
          </div>
          <div className='box'>
          <img src={require("../images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 3</div>
          </div>
          <div className='box'>
          <img src={require("../images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 4</div>
          </div>
          <div className='box'>
          <img src={require("../images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 5</div>
          </div>
          <div className='box'>
          <img src={require("../images/sokk.jpg")} alt=""/>
            <div class="box-text">Toode 6</div>
          </div>
        </div>
      </div>
    </div>  
      );
}

export default Tooted;