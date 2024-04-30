import { SAWY_PATH } from "../App";
import Accordian from "./Accordian";

export default function SawyDownloads() {
    return <div id="download-section">
        <a className="back-to-sawy" href={"#" + SAWY_PATH}>{"\u2039"}back</a>
        <div id="two-column-container">
            <div style={{display: "flex", flexDirection: "column", flex: " 2 1 0", marginBottom: "50px"}}>
                <Accordian contentHeight="1820px" label="the dito">
                    <div>
                        <h3 style={{margin: "20px", height: "40px", textAlign: "center"}}>upload code</h3>
                        <iframe
                            title="finger slideshow"
                            id="embedded-slide"
                            height="500px" 
                            style={{width: "100%", margin: "0 auto 20px auto"}}
                            src="https://docs.google.com/presentation/d/e/2PACX-1vQJdEJ6zX6NixCrjQTAdcCCdA2ouCLl2hjiYQGp4HFjMNsDiIRhFwe36l0cff5A_i3EUquyIIznh4lR/embed?loop=true"
                            allowFullScreen={true}
                        />
                        <hr style={{margin: "10px"}}/>
                        <h3 style={{margin: "20px", height: "40px", textAlign: "center"}}>wiring diagram</h3>
                        <iframe
                            title="finger slideshow"
                            id="embedded-slide"
                            height="500px" 
                            style={{width: "100%", margin: "0 auto 20px auto"}}
                            src="https://docs.google.com/presentation/d/e/2PACX-1vTdtoGy2skIJxsOCzhssWHuCg7SsrG4ia8iljzUE4nFrmJlzyJ928XZK8kdvy4hYxcsQmVr1CPPPX8O/embed?loop=true"
                            allowFullScreen={true}
                        />
                        <hr style={{margin: "10px"}}/>
                        <h3 style={{margin: "20px", height: "40px", textAlign: "center"}}>assembly video</h3>
                        <iframe
                            title="finger slideshow"
                            id="embedded-slide"
                            height="500px" 
                            style={{width: "100%", margin: "0 auto 20px auto"}}
                            src="https://docs.google.com/presentation/d/e/2PACX-1vT0Uk2_Ug4vuMhfU8VNaO09ke1MBXFdCAopYe9DpfZ53KehL-AKtSJ-XFsZ1OhOJd_lrrKF3whQh9jR/embed?loop=true"
                            allowFullScreen={true}
                        />
                    </div>
                    
                </Accordian>
            </div>
            <div style={{display: "flex", flexDirection: "column", flex: " 1 1 0"}}>
                <div style={{margin: "30px"}} className="link-table">
                    <div style={{backgroundColor: "#333"}} className="download-tab"><h5 style={{margin: "5px", color: "white"}}>file downloads</h5></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href={require("../res/files/default_firmware.zip")}    download>default_factory_firmware</a></div>
                    <div style={{backgroundColor: "#f9f9f9"}} className="download-tab"><a className="download-link" href={require("../res/files/finger_robot.zip")}        download>sawy-sawy_claw_robot</a></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href={require("../res/files/line_follower_robot.zip")} download>line_follower_code</a></div>
                </div>
                <div style={{margin: "30px"}} className="link-table">
                    <div style={{backgroundColor: "#333"}} className="download-tab"><h5 style={{margin: "5px", color: "white"}}>useful links</h5></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href="https://en.softonic.com/download/arduinodroid-arduinoesp8266/android/post-download" rel="noreferrer  noopener" target="none">Arduino_Droid</a></div>
                    <div style={{backgroundColor: "#bbb"}} className="download-tab"><a className="download-link" href="https://www.arduino.cc/en/software" rel="noreferrer  noopener" target="none">Arduino_IDE</a></div>
                </div>
            </div>
        </div>  
        
        
    </div>
}