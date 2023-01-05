import "../components/css/Tooted.css";
import { Link } from "react-router-dom"
import { useState } from "react";
import ProductList from "../tooted.json";
import { useRef } from "react";


function Tooted() {

  const [test, updateTest] = useState( ProductList );

  

  const kustuta = (number) => {
    test.splice(number,1);
    updateTest(test.slice());
  }
  
    return (
    <div className='flexbox-container'>
      <div className='boxes'>
      {test.map((asi,index) =>
      <div key={index}>
        
          <div className='box'>
            <img src={asi.pilt} alt="Siin on pilt"/>
            <h1 class="box-text"> {asi.toode} </h1>
            <p> {asi.kirjeldus} </p>
            <h3 class="box-text"> {asi.hind} </h3>
            <br/>
            <div className="nupud">
              <button className="ostukorvinupp" onClick={() => kustuta(index)}>Kustuta</button>
              <Link to ={"/tooted/toode/"}>
                <button className="ostukorvinupp">Lisainfo</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
      );
}

export default Tooted;