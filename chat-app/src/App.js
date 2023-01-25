import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatPage from './components/pages/ChatPage';
import AllChatsPage from './components/pages/AllChatsPage';
import LoginPage from './components/pages/LoginPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/chats' element={<AllChatsPage/>}/>
        <Route path='/chat/ourgroup' element={<ChatPage/>}/>
        <Route path='/' element={<LoginPage/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
