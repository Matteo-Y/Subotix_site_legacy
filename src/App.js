import { HashRouter, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './modules/Header';
import Landing from './modules/Landing';
import PageNotFound from './modules/PageNotFound';
import Sawy from './modules/Sawy';
import Footer from './modules/Footer';

const BASE_PATH = "/";
const SAWY_PATH = BASE_PATH + "sawy-sawy";
const GALLERY_PATH = BASE_PATH + "gallery";

export { BASE_PATH, SAWY_PATH, GALLERY_PATH };

export default function App() {
  return (
    <div className="App">
      <Header/>
      <div id="content">
        <HashRouter>
          <Routes>
            <Route path={BASE_PATH} element={<Landing/>}/>
            <Route path={SAWY_PATH} element={<Sawy/>}/>
            <Route path={"*"} element={<PageNotFound/>}/>
          </Routes>
        </HashRouter>
      </div>
      <Footer/>
    </div>
  );
}
