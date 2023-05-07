import BASE_URL from '../App.js';

export default function Header() {
    return (
        <>
            <div className="head">
                <a href="/home" className="header-element">home</a>
                <a href="/store" className="header-element">store</a>
                <h1>SUBOTIX</h1>
            </div>
        </>
    );
}