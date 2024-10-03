import {useState} from "react";
import { SAWY_PATH } from "../../App";

export default function SawyApps() {
    const [modalOpen, setModalOpen] = useState(false);
    const [app, setApp] = useState(null);

    function openApp(app) {
        setModalOpen(true);
        setApp(app);
    }

    function closeModal() {
        setModalOpen(false);
        setApp(null);
    }

    return <div id="web-app-page">
        <a className="back-to-sawy" href={"#" + SAWY_PATH}>{"\u2039"}back</a>
        <div id="app-select-container">
            <button className="app-select" onClick={() => openApp(PianoApp)}>piano</button>
            <button className="app-select" onClick={() => openApp(SimonApp)}>simon</button>
        </div>
        
        {modalOpen ? <div id="sawy-apps-modal-bg">
            <div id="sawy-apps-modal">
                <button onClick={closeModal}>X</button>
                {app}
            </div>
        </div> : <></>}
    </div>
}

function PianoApp() {
    function keyDown(e) {
        e.preventDefault();
        let key = e.key;
        switch(key) {
            case "ArrowLeft":
                playKey("note-1")
                break;
            case "ArrowUp":
                playKey("note-2")
                break;
            case "ArrowRight":
                playKey("note-3")
                break;
            case "ArrowDown":
                playKey("note-4")
                break;
            case " ":
                playKey("note-5")
                break;
            default:
                break;
        }
    }

    function pianoClick(e) {
        let key = e.target.id;
        switch(key) {
            case "key-1":
                playKey("note-1");
                break;
            case "key-2":
                playKey("note-2");
                break;
            case "key-3":
                playKey("note-3");
                break;
            case "key-4":
                playKey("note-4");
                break;
            case "key-5":
                playKey("note-5");
                break;
            case "key-6":
                playKey("note-6");
                break;
            default:
                break;
        }
    }

    function playKey(key) {
        let keyElement;
        switch(key) {
            case "note-1":
                keyElement = "key-1";
                break;
            case "note-2":
                keyElement = "key-2";
                break;
            case "note-3":
                keyElement = "key-3";
                break;
            case "note-4":
                keyElement = "key-4";
                break;
            case "note-5":
                keyElement = "key-5";
                break;
            case "note-6":
                keyElement = "key-6";
                break;
            default:
                break;
        }
        document.getElementById(keyElement).classList.remove("key-pressed");
        void document.getElementById(keyElement).offsetHeight;
        document.getElementById(keyElement).classList.add("key-pressed");
        let audio = document.getElementById(key);
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }

    function playClick() {
        playKey("note-6");
    }

    return <div style={{width: "100%", height: "100%", outline: "none"}} onClick={playClick} onKeyDown={keyDown} tabIndex="0">
        <audio id="note-1" src={require("../SawyPage/res/audio/C-converted.wav")}/>
        <audio id="note-2" src={require("../SawyPage/res/audio/D-converted.wav")}/>
        <audio id="note-3" src={require("../SawyPage/res/audio/E-converted.wav")}/>
        <audio id="note-4" src={require("../SawyPage/res/audio/F-converted.wav")}/>
        <audio id="note-5" src={require("../SawyPage/res/audio/G-converted.wav")}/>
        <audio id="note-6" src={require("../SawyPage/res/audio/A-converted.wav")}/>
        <div id="piano">
            <div id="key-1" className="piano-key" onClick={pianoClick}><span>{"\u2190"}</span></div>
            <div id="key-2" className="piano-key" onClick={pianoClick}><span>{"\u2191"}</span></div>
            <div id="key-3" className="piano-key" onClick={pianoClick}><span>{"\u2192"}</span></div>
            <div id="key-4" className="piano-key" onClick={pianoClick}><span>{"\u2193"}</span></div>
            <div id="key-5" className="piano-key" onClick={pianoClick}><span>space</span></div>
            <div id="key-6" className="piano-key" onClick={pianoClick}><span>click</span></div>
        </div>
    </div>
}

function SimonApp() {

    function pressKey(e) {

    }

    return <div style={{width: "100%", height: "100%", outline: "none"}}>
        <button>start</button>
        <div id="simon">
            <div className="simon-button" style={{gridArea: "simon-up"}}></div>
            <div className="simon-button" style={{gridArea: "simon-down"}}></div>
            <div className="simon-button" style={{gridArea: "simon-right"}}></div>
            <div className="simon-button" style={{gridArea: "simon-left"}}></div>
        </div>
    </div>
}