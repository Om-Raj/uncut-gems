import heroImageDesktop from "./assets/images/image-hero-desktop.png"
import databizLogo from "./assets/images/client-databiz.svg"
import audiophileLogo from "./assets/images/client-audiophile.svg"
import meetLogo from "./assets/images/client-meet.svg"
import makerLogo from "./assets/images/client-maker.svg"

const MainContent = () => {
    return ( 
        <div className="main">
            <img className="hero-image" src={heroImageDesktop} alt="A man using a laptop" />
            <div className="hero-content">
                <h1 className="hero-title">Make remote work</h1>
                <p className="hero-text">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <button className="solid-btn">Learn more</button>
                <div className="clients">
                    <img src={databizLogo} alt="Databiz logo" />
                    <img src={audiophileLogo} alt="Audiophile logo" />
                    <img src={meetLogo} alt="Meet logo" />
                    <img src={makerLogo} alt="Maker logo" />
                </div>
            </div>
        </div>
    );
}
 
export default MainContent;