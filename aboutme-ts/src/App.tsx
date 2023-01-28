import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import ProjectsPage from './components/pages/ProjectsPage';

function App() {
  return (
    <div id='App'>
      <Header />
      <Routes>
        <Route path='/thetilekovich' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />

      </Routes>

      <Footer />

    </div>
  );
}

export default App;
