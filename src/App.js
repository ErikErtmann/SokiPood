import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom'; 
import Particle from './components/global/Particle';
import Footer from './components/global/Footer';
import HomeP from "./pages/HomeP";
import NavigationBar from './components/global/NavigationBar';

function App() {
  return (
    <div>
      <NavigationBar />
      <Particle/>
      <HomeP />
      <Footer/>
    </div>
  );
}

export default App;
