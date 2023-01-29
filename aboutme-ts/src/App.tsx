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
import { useSelector, useDispatch } from 'react-redux';
import { ADD_COMMENTS, HIDE_MENU } from './components/redux/actions';
import axios from 'axios';
import { IComment } from './components/types';

function App() {
  const { pathname } = useLocation()
  const { showed } = useSelector((s: { menu: { showed: boolean } }) => s.menu)
  const dispatch = useDispatch()


  const handleHideClick = () => {
    if (showed) {
      setTimeout(() => {
        dispatch({ type: HIDE_MENU })
      }, 100)
    }
  }





  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [[pathname]])


  return (
    <div id='App'
      onClick={handleHideClick}
    >
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
