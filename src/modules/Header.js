
import { BASE_PATH, SAWY_PATH } from '../App.js';

export default function Header() {
    return ( 
        <div className="head">
            <a href={BASE_PATH} className="header-element">home</a>
            <a href={SAWY_PATH} className="header-element">sawysawy</a>
            <h1>SUBOTIX</h1>
            <hr style={{marginTop: "10px"}}></hr>
        </div>
    );
}