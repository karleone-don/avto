import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ZeekrX from './pages/zeekrx/zeekrx.tsx';
import CheryTiggo7 from './pages/cherytiggo7/cherytiggo7.tsx';
import Elantra24 from './pages/elantra24/elantra24.tsx';
import BenzC180 from './pages/benzc180/benzc180.tsx';
import KiaCerato2024 from './pages/kiacerato24/kiacerato24.tsx';
import LexusGX460 from './pages/lexusgx460/lexusgx460.tsx';
import BMW530i from './pages/bmw530i/bmw530i.tsx';
import HyundaiStaria2025 from './pages/staria2025/staria2025.tsx';
import LixiangLi6 from './pages/lixiangli6/lixiangli6.tsx';
import KiaCarnival2024 from './pages/kiacarnival2024/kiacarnival2024.tsx';
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
        {/*комфорт*/}
        <Route path="/lexus-gx460" element={<LexusGX460 />} />
        <Route path="/bmw-530i" element={<BMW530i />} />
        <Route path="/hyundai-staria-2025" element={<HyundaiStaria2025 />} />
        <Route path="/lixiang-li6" element={<LixiangLi6 />} />
        <Route path="/kia-carnival-2024" element={<KiaCarnival2024 />} />
        {/*комфорт+*/}
      </Routes>
    </Router>
  )
}

export default App
