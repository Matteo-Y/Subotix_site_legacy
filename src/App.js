import './styles/App.css';

import Header from './modules/Header';
import Landing from './modules/Landing';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home"/>} />
          <Route path="/home" element={<Landing/>}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
