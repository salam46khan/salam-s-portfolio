import AboutSec from "../AboutSec/AboutSec";
import Banner from "../Banner/Banner";
import ContactSec from "../ContactSec/ContactSec";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <Skills></Skills>
            <ContactSec></ContactSec>
        </div>
    );
};

export default Home;