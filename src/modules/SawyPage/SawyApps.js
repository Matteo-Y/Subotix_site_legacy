import {useState, useEffect} from "react";
import { SAWY_PATH } from "../../App";
import { isVisible } from "@testing-library/user-event/dist/utils";

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
            <button className="app-select" onClick={() => openApp('piano')}>piano</button>
            <button className="app-select" onClick={() => openApp('simon')}>simon</button>
        </div>
        
        {modalOpen ? <div id="sawy-apps-modal-bg">
            <div id="sawy-apps-modal">
                <button id="close-app-button" onClick={closeModal}>x</button>
                <PianoApp show={app == 'piano' ? "default" : "none"}/>
                <SimonApp show={app == 'simon' ? "default" : "none"}/>
            </div>
        </div> : <></>}
    </div>
}

function PianoApp(props) {
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

    return <div style={{width: "100%", height: "100%", outline: "none", display: props.show}} onClick={playClick} onKeyDown={keyDown} tabIndex="0">
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

const directions = ['up', 'right', 'down', 'left'];

function SimonApp(props) {
    const [gameSequence, setGameSequence] = useState([]);
    const [playerSequence, setPlayerSequence] = useState([]);
    const [isPlayerTurn, setIsPlayerTurn] = useState(false);
    const [currentRound, setCurrentRound] = useState(0);
    const [message, setMessage] = useState('round: 0');
    const [timeoutId, setTimeoutId] = useState(null);
    const [isGameActive, setIsGameActive] = useState(false);

    function getRandomDirection() {
        return directions[Math.floor(Math.random() * directions.length)];
    }

    function nextRound() {
        const nextDirection = generateUniqueDirection();
        setGameSequence((prevSequence) => [...prevSequence, nextDirection]);
        setPlayerSequence([]);
        setMessage(`round: ${currentRound + 1}`);
        setCurrentRound((prevRound) => prevRound + 1);
        setIsPlayerTurn(false);
    }

    function generateUniqueDirection() {
        let newDirection;
        do {
            newDirection = getRandomDirection();
        } while (gameSequence.length > 0 && newDirection === gameSequence[gameSequence.length - 1]);
        return newDirection;
    }

    useEffect(() => {
        if (gameSequence.length > 0) {
            playGameSequence();
        }
    }, [gameSequence]);

    async function playGameSequence() {
        for (let i = 0; i < gameSequence.length; i++) {
            await flashButton(gameSequence[i]);
        }
        setIsPlayerTurn(true);
        startTimeout();
    }

    function flashButton(direction) {
        return new Promise((resolve) => {
            const button = document.getElementById(direction);
            button.classList.add('active');
            setTimeout(() => {
                button.classList.remove('active');
                resolve();
            }, 600);
        });
    }

    function handlePlayerClick(direction) {
        if (!isPlayerTurn) return;

        const newPlayerSequence = [...playerSequence, direction];
        setPlayerSequence(newPlayerSequence);
        clearTimeout(timeoutId);

        const index = newPlayerSequence.length - 1;
        if (newPlayerSequence[index] !== gameSequence[index]) {
            setMessage('wrong! game over!');
            resetGame();
            return;
        }

        if (newPlayerSequence.length === gameSequence.length) {
            setMessage('correct! next round!');
            setTimeout(nextRound, 1000);
        } else {
            startTimeout();
        }

        flashButton(direction);
    }

    function startTimeout() {
        clearTimeout(timeoutId);
        const id = setTimeout(() => {
            setMessage('time ran out! game over!');
            resetGame();
        }, 3000);
        setTimeoutId(id);
    }

    function resetGame() {
        setTimeout(() => {
            setGameSequence([]);
            setPlayerSequence([]);
            setIsPlayerTurn(false);
            setCurrentRound(0);
            setMessage('round: 0');
            setIsGameActive(false);
        }, 1000);
    }

    function startGame() {
        setIsGameActive(true);
        setMessage('starting game...');
        nextRound();
    }

    useEffect(() => {
        function handleKeyPress(event) {
            const keyToDirection = {
                ArrowUp: 'up',
                ArrowRight: 'right',
                ArrowDown: 'down',
                ArrowLeft: 'left',
            };
            const direction = keyToDirection[event.key];
            if (direction) {
                event.preventDefault();
                handlePlayerClick(direction);
            }
        }

        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [isPlayerTurn, playerSequence]);

    return (
        <div className="simon-game" style={{display: props.show}}>
            <div className="message">{message}</div>
            <div className="board">
                <div />
                <div id="up" className="direction-button up" onClick={() => handlePlayerClick('up')}><span>↑</span></div>
                <div />
                <div id="left" className="direction-button left" onClick={() => handlePlayerClick('left')}><span>←</span></div>
                <div />
                <div id="right" className="direction-button right" onClick={() => handlePlayerClick('right')}><span>→</span></div>
                <div />
                <div id="down" className="direction-button down" onClick={() => handlePlayerClick('down')}><span>↓</span></div>
                <div />
            </div>
            <button onClick={startGame} className="start-button" disabled={isGameActive}>start</button>
        </div>
    );
};
