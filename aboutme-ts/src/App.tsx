import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import ProjectsPage from './components/pages/ProjectsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const { pathname } = useLocation()

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [[pathname]])
  return (
    <div id='App'>
      <Header />
      <Routes>
        <Route path='/thetilekovich' element={<HomePage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/projects' element={<ProjectsPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contacts' element={<ContactPage />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
