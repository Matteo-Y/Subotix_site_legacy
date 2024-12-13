import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './modules/Footer';
import Header from './modules/Header';
import Landing from './modules/Landing/Landing';
import PageNotFound from './modules/PageNotFound';
import InDevelopment from './modules/InDevelopment'
import Sawy from './modules/SawyPage/Sawy';
import ScrollToTop from './modules/ScrollToTop';
import './styles/App.css';
import SawyDownloads from './modules/SawyPage/SawyDownloads';
import SawyApps from './modules/SawyPage/SawyApps';
import PrivacyPolicy from './modules/PrivacyPolicy/PrivacyPolicy';

const BASE_PATH = "/";
const SAWY_PATH = BASE_PATH + "sawy-sawy";
const PRIVACY_PATH = BASE_PATH + "privacy";
const STORE_PATH = BASE_PATH + "store";

const SOCIALS = {
  facebook: "https://www.facebook.com/SUBOTIX",
  instagram: "https://www.instagram.com/saudisubotix/",
  x: "https://twitter.com/MSXBocaChica",
  youtube: "https://www.youtube.com/@subotix",
}

export { BASE_PATH, SAWY_PATH, STORE_PATH, SOCIALS };

export default function App() {
  return (
    <div className="App">
      <Header/>
      <div id="content">
        <HashRouter>
          <ScrollToTop/>
          <Routes>
            <Route path={BASE_PATH} element={<Landing/>}/>
            <Route path={SAWY_PATH} element={<Sawy/>}/>
            <Route path={SAWY_PATH + "/web-apps"} element={<SawyApps/>}/>
            <Route path={SAWY_PATH + "/downloads"} element={<SawyDownloads/>}/>
            <Route path={PRIVACY_PATH} element={<PrivacyPolicy/>}/>
            <Route path={STORE_PATH} element={<InDevelopment/>}/>
            <Route path={"*"} element={<PageNotFound/>}/>
          </Routes>
        </HashRouter>
      </div>
      <Footer/>
    </div>
  );
}
