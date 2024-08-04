import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';
import ClassicVehiclesGlass from './components/Pages/ClassicVehiclesGlass/index';
import CommercialWindowTint from './components/Pages/CommercialWindowTint/index';
import LandingPage from './components/Pages/LandingPage';
import TeslaWindowTint from './components/Pages/TeslaWindowTint';
import FleetWraps from './components/Pages/FleetWraps';
import Wraps from './components/Pages/Wraps';
import AutoGlass from './components/Pages/AutoGlass';
import Convantions from './components/Pages/Conventions';
import AutoTint from './components/Pages/AutoTint';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/classic-vehicles-glass" element={<ClassicVehiclesGlass />} />
          <Route path="/commercial-window-tint" element={<CommercialWindowTint />} />
          <Route path="/tesla-window-tint" element={<TeslaWindowTint />} />
          <Route path="/fleet-wraps" element={<FleetWraps />} />
          <Route path="/wraps" element={<Wraps />} />
          <Route path="/auto-glass" element={<AutoGlass />} />
          <Route path="/convantions" element={<Convantions />} />
          <Route path="/auto-tint" element={<AutoTint />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
