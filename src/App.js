import './styles/App.css';
import Header from './modules/Header';
import Landing from './modules/Landing';
import PageNotFound from './modules/PageNotFound';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const BASE_PATH = "/";

export { BASE_PATH};

export default function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={BASE_PATH} element={<Landing/>}/>

          <Route path={"*"} element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
