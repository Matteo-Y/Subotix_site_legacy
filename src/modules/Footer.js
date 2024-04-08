import { SOCIALS } from "../App"

export default function Footer() {
    return (<div id="footer">
        <div id="footer-links">
            <p style={{paddingLeft: "10px", marginBottom: "10px"}}>See us on: <br/></p>
            <a style={{marginRight: "10px"}} href={SOCIALS.facebook}  target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/FB-logo.webp")} alt="facebook"/></a>
            <a style={{marginRight: "10px"}} href={SOCIALS.instagram} target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/INSTA-logo.webp")} alt="instagram"/></a>
            <a style={{marginRight: "10px"}} href={SOCIALS.x}         target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/X-logo.webp")} alt="instagram"/></a>
            <a style={{marginRight: "10px"}} href={SOCIALS.youtube}   target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/YT-logo.webp")} alt="instagram"/></a>
        </div>
        <div id="individual-info">
            <p>
                For business inquiries:<br/>
                subotix.llc@gmail.com<br/>
            </p>
        </div>
        <div id="misc-info">
        
        </div>
    </div>)
}

//https://www.facebook.com/SUBOTIX
//https://www.instagram.com/saudisubotix/
//https://twitter.com/MSXBocaChica
//https://www.youtube.com/@subotix