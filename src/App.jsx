import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import api from './api';
import Cabecalho from './components/Cabecalho/Cabecalho';
import BarraNavegacao from './components/BarraNavegacao/BarraNavegacao';
import Rodape from './components/Rodape/Rodape';
import Curriculo from './components/Curriculo/Curriculo';
import Portfolio from './components/Portfolio/Portfolio';
import Contato from './components/Contato/Contato';

function App() {
  const [informacoes, setInformacoes] = useState({});
  const [curriculo, setCurriculo] = useState({});
  const [portfolio, setPortfolio] = useState([]);

  const fetchDados = async () => {
    try {
      const informacao = await api.get('/informacoes/1');
      setInformacoes({
        foto: informacao.data.foto,
        nome: informacao.data.nome,
        cargo: informacao.data.cargo,
      });

      const experienciaAcademica = await api.get('/experiencias?tipo=academico');
      const experienciaProfissional = await api.get('/experiencias?tipo=profissional');

      setCurriculo({
        resumo: informacao.data.resumo,
        experienciaAcademica: experienciaAcademica.data,
        experienciaProfissional: experienciaProfissional.data,
      });

      const portfolio = await api.get('/portfolios');
      setPortfolio(portfolio.data);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  useEffect(() => {
    fetchDados();
  }, []);

  return (
    <>
      <Cabecalho informacoes={informacoes} />

      <BrowserRouter>
        <BarraNavegacao />
        <Routes>
          <Route index element={<Curriculo curriculo={curriculo} />} />
          <Route path="portfolio" element={<Portfolio portfolio={portfolio} />} />
          <Route path="contato" element={<Contato />} />
        </Routes>
      </BrowserRouter>

      <Rodape />
    </>
  );
}

export default App;

















