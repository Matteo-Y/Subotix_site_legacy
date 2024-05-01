export default function SawyApps() {

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

    return <div id="web-app-page" onClick={playClick} onKeyDown={keyDown} tabIndex="0">
        <audio id="note-1" src={require("../res/audios/key18.mp3")}/>
        <audio id="note-2" src={require("../res/audios/key19.mp3")}/>
        <audio id="note-3" src={require("../res/audios/key20.mp3")}/>
        <audio id="note-4" src={require("../res/audios/key21.mp3")}/>
        <audio id="note-5" src={require("../res/audios/key22.mp3")}/>
        <audio id="note-6" src={require("../res/audios/key23.mp3")}/>
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