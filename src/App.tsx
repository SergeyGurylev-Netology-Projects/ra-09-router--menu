import './App.css'
import Menu from './components/menu/menu.tsx';
import HomePage from './components/pages/home-page.tsx';
import DriftPage from './components/pages/drift-page.tsx';
import TimeAttackPage from './components/pages/time-attack-page.tsx';
import ForzaPage from './components/pages/forza-page.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export default function App() {

  return (
    <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
