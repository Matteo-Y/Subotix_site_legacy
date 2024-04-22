export default function SawyDownloads() {
    return <div id="download-section">
        <div id="download-table">
            <div className="download-tab"><a className="download-link" href={require("../res/files/default_firmware.zip")}    download>default_factory_firmware</a></div>
            <div className="download-tab"><a className="download-link" href={require("../res/files/finger_robot.zip")}        download>sawy-sawy_claw_robot</a></div>
            <div className="download-tab"><a className="download-link" href={require("../res/files/line_follower_robot.zip")} download>line_follower_code</a></div>
        </div>
    </div>
}