import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import "../css/NavigationBar.css";

function NavigationBar() {
    return (
      <div>
        <div className="flexbox-container-navbar">
         <NavbarBrand className='brand'>Sossuk</NavbarBrand>
          <Navbar bg="transparent" expand="lg">
           <div className='lingid'>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href=".."className='caption'>Esileht</Nav.Link>
                <Nav.Link href="tooted"className='caption'>Tooted</Nav.Link>
                <Nav.Link href="resume"className='caption'>Kontakt</Nav.Link>
            </Navbar.Collapse>
           </div>
          </Navbar>
          <div className="navbox"></div>
        </div>
      </div>
    );
  }
  
  export default NavigationBar;