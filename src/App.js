import './styles/App.css';

import Header from './modules/Header';
import Landing from './modules/Landing';
import StorePage from './modules/StorePage';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Landing/>}/>
          <Route path="/store" element={<StorePage view='hub'/>}/>
          <Route path="/store/:category" element={<StorePage view='products'/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
