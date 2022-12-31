import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../css/NavigationBar.css";

function NavigationBar() {
    return (
      <div>
        <div className="flexbox-container-navbar">
          <Navbar bg="transparent" expand="lg">
           <div className='lingid'>
            <Navbar.Collapse id="basic-navbar-nav">
                <Link to="/"className='caption'>Esileht</Link>
                <Link to="/tooted"className='caption'>Tooted</Link>
                <Link to="/kontakt"className='caption'>Kontakt</Link>
                <Link to="/ostukorv"className='caption'>Ostukorv(hiljem logo)</Link>
                
            </Navbar.Collapse>
           </div>
          </Navbar>
          <div className="navbox"></div>
        </div>
      </div>
    );
  }
  
  export default NavigationBar;