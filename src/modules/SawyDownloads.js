import { SAWY_PATH } from "../App";

export default function SawyDownloads() {
    return <div id="download-section">
        <a className="back-to-sawy" href={"#" + SAWY_PATH}>{"\u2039"}back</a>
        <div className="link-table">
            <div style={{backgroundColor: "#333"}} className="download-tab"><h5 style={{margin: "5px", color: "white"}}>file downloads</h5></div>
            <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href={require("../res/files/default_firmware.zip")}    download>default_factory_firmware</a></div>
            <div style={{backgroundColor: "#f9f9f9"}} className="download-tab"><a className="download-link" href={require("../res/files/finger_robot.zip")}        download>sawy-sawy_claw_robot</a></div>
            <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href={require("../res/files/line_follower_robot.zip")} download>line_follower_code</a></div>
        </div>
        <div className="link-table">
            <div style={{backgroundColor: "#333"}} className="download-tab"><h5 style={{margin: "5px", color: "white"}}>useful links</h5></div>
            <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href="https://en.softonic.com/download/arduinodroid-arduinoesp8266/android/post-download" rel="noreferrer  noopener" target="none">Arduino_Droid</a></div>
        </div>
    </div>
}