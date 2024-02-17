
export default function Landing() {
    return (
        <div className="landing-page">
            <div className="hero section">
                <img style={{marginRight: "5%"}} className="banner" src={require("../res/Banner_0.jpg")}/>
                <div id="about-us-textbox">
                    <h2>about us</h2>
                    <p>[filler text]</p>
                </div>
            </div>
            <div className="sawysawy section">
                <a className="overlay-link" href="/sawy-sawy"></a>
                <p>[insert sawy sawy content]</p>
            </div>
            <div className="contacts section">
                <p>[insert contacts content]</p>
            </div>
        </div>
    );
}