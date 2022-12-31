import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Particle from './components/global/Particle';
import Footer from './components/global/Footer';
import HomeP from "./pages/HomeP";
import Tooted from './pages/Tooted';
import NavigationBar from './components/global/NavigationBar';
import Kontakt from './pages/Kontakt';
import Ostukorv from './pages/Ostukorv';
import Toode from './pages/Toode'

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="" element={ <HomeP/> } />
        <Route path="/tooted" element={ <Tooted /> } />
        <Route path="/kontakt" element ={ <Kontakt />} />
        <Route path="/ostukorv" element ={ <Ostukorv />} />
        <Route path="tooted/toode" element ={ <Toode />} />
      </Routes>
      
      <Footer/>
      <Particle/>
    </div>
  );
}

export default App;
