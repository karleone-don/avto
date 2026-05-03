import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ZeekrX from './pages/zeekrx/zeekrx.tsx';
import CheryTiggo7 from './pages/cherytiggo7/cherytiggo7.tsx';
import Elantra24 from './pages/elantra24/elantra24.tsx';
import BenzC180 from './pages/benzc180/benzc180.tsx';
import KiaCerato2024 from './pages/kiacerato24/kiacerato24.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';
//import ZeekrX from './pages/zeekrx/zeekrx.tsx';

function App() {
  return (
    <Router>
      <Routes>
        {/*эконом*/}
        <Route path="/zeekr-x" element={<ZeekrX />} />
        <Route path="/chery-tiggo-7-pro" element={<CheryTiggo7 />} />
        <Route path="/elantra-2024" element={<Elantra24 />} />
        <Route path="/benz-c180" element={<BenzC180 />} />
        <Route path="/kia-cerato-2024" element={<KiaCerato2024 />} />
        {/*премиум*/}
      </Routes>
    </Router>
  )
}

export default App
