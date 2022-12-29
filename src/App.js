import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Particle from './components/global/Particle';
import Footer from './components/global/Footer';
import HomeP from "./pages/HomeP";
import Tooted from './pages/Tooted';
import NavigationBar from './components/global/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="" element={ <HomeP/> } />
        <Route path="/tooted" element={ <Tooted /> } />
      </Routes>
      
      <Footer/>
      <Particle/>
    </div>
  );
}

export default App;
