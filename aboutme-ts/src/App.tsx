import * as React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

function App() {
  return (
    <div id='App'>
      <Header />
        <Routes>
          <Route path='/thetilekovich' element={<HomePage />} />
        </Routes>

      <Footer />

    </div>
  );
}

export default App;
