import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import SobreLuisFelipe from './components/SobreLuisFelipe';
import Sobre from './components/Sobre'; // Importe o novo componente Sobre
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main style={{ minHeight: 'calc(100vh - 80px)' }}> {/* Garante que o main tenha espaço suficiente */}
        <Routes>
          {/* Rota para a página inicial */}
          <Route 
            path="/home" 
            element={
              <>
                <Banner />
                <SobreLuisFelipe />
              </>
            } 
          />
          {/* Rota para a página "Sobre Luís Felipe" */}
          <Route path="/sobre-luis-felipe" element={<SobreLuisFelipe />} />
          {/* Rota para o novo componente "Sobre" */}
          <Route path="/sobre" element={<Sobre />} />
          {/* Redirecionamento da rota raiz para a home */}
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </main>
      <Footer /> {/* Footer é colocado fora do main para garantir que esteja no final da página */}
    </Router>
  );
}

export default App;
