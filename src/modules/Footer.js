import { SOCIALS } from "../App"

export default function Footer() {
    return (<div id="footer">
        <div id="footer-links">
            <p style={{paddingLeft: "10px", marginBottom: "10px"}}>Follow us on: <br/></p>
            <a style={{marginRight: "10px"}} href={SOCIALS.facebook}  target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/FB-logo.webp")} alt="facebook"/></a>
            <a style={{marginRight: "10px"}} href={SOCIALS.instagram} target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/INSTA-logo.webp")} alt="instagram"/></a>
            <a style={{marginRight: "10px"}} href={SOCIALS.x}         target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/X-logo.webp")} alt="instagram"/></a>
            <a style={{marginRight: "10px"}} href={SOCIALS.youtube}   target="_blank" rel="noreferrer noopener"><img className="footer-icon" src={require("../res/pictures/ui/YT-logo.webp")} alt="instagram"/></a>
        </div>
        <div id="individual-info">
            <p>
                E-mail: subotix.llc@gmail.com
            </p>
            <br/>
            <p>
                Phone: 832-273-5548
            </p>
        </div>
        <div id="misc-info">
            <p>© Subotix LLC</p>
        </div>
    </div>)
}

//https://www.facebook.com/SUBOTIX
//https://www.instagram.com/saudisubotix/
//https://twitter.com/MSXBocaChica
//https://www.youtube.com/@subotix