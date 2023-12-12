import AboutSec from "../AboutSec/AboutSec";
import Banner from "../Banner/Banner";
import ContactSec from "../ContactSec/ContactSec";
import Experiance from "../Experiance/Experiance";
import ProjectSec from "../ProjectSec/ProjectSec";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutSec></AboutSec>
            <Skills></Skills>
            <ProjectSec></ProjectSec>
            <Experiance></Experiance>
            <ContactSec></ContactSec>
        </div>
    );
};

export default Home;