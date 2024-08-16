import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
//import Galeria from './components/Galeria';
import SobreLuisFelipe from './components/SobreLuisFelipe';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Banner />} />
          <Route path="/sobre" element={<SobreLuisFelipe />} />
          
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
