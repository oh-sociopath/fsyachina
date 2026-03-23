import { Route, Routes } from 'react-router';
import { AboutUs } from './pages/AboutUs.tsx';
import { DaysToDate } from './pages/Days-to-Date.tsx';
import { BgImage } from './pages/BgImage.tsx';
import { Header } from './pages/Header.tsx';


function App() {

  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" element={<BgImage />}/>
              <Route path="/days-to-date" element={<DaysToDate/>}/>
              <Route path="/about" element={<AboutUs/>}/>
          </Routes>
      </div>
  )
}

export default App
