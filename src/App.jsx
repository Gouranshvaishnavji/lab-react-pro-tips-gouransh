import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Form from './pages/Form';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='body'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
