import AboutSec from "../AboutSec/AboutSec";
import Banner from "../Banner/Banner";
import Choose from "../Choose/Choose";
import ContactSec from "../ContactSec/ContactSec";
import Education from "../Education/Education";
import Experiance from "../Experiance/Experiance";
import ProjectSec from "../ProjectSec/ProjectSec";
import Skills from "../Skills/Skills";

const Home = () => {
    return (
        <div className="relative">
            <div className="pink-bg top-[1040px] left-[10%] bg-[#fd3de312]"></div>
            <div className="pink-bg top-[1540px] right-[10%] bg-[#4548ff15]"></div>
            <div className="pink-bg top-[2240px] left-[10%] bg-[#4548ff15]"></div>
            <div className="pink-bg top-[3840px] left-[10%] bg-[#fd3de312]"></div>
            <div className="pink-bg top-[4340px] right-[10%] bg-[#4548ff15]"></div>
            <div className="pink-bg top-[5040px] left-[10%] bg-[#fd3de312]"></div>

            <Banner></Banner>
            <AboutSec></AboutSec>
            <Skills></Skills>
            <ProjectSec></ProjectSec>
            <Education></Education>
            <Choose></Choose>
            <Experiance></Experiance>
            <ContactSec></ContactSec>
        </div>
    );
};

export default Home;