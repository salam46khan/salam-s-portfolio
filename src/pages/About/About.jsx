import './About.css'
import Abb from '../../assets/aabb.png'
import Experiance from '../Home/Experiance/Experiance';
import Skills from '../Home/Skills/Skills';
const About = () => {
    return (
        <div className="font-NormalText">
            <div className="about-banner">
                <div className="container mx-auto flex justify-center items-center h-full pt-16">
                    <p className="font-SubTitle font-bold md:text-7xl text-5xl text-pink-400">About Me</p>
                </div>
            </div>
            <div className='py-10 px-3 container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-end gap-3'>
                    <div className='px-3'>
                        <h3 className="border-b-4 border-pink-400 inline-block pr-6 font-SectionTitle text-3xl mb-3">Introduction</h3>
                        <p>
                            Hello, I&apos;m Abdus Salam, a dedicated front-end developer passionate about crafting immersive and visually appealing web experiences. With expertise in HTML, CSS, and JavaScript, and proficiency in frameworks like React JS, I specialize in creating dynamic and user-friendly interfaces. <br />
                            My commitment to excellence extends to utilizing technologies such as MongoDB, Express JS, Tailwind CSS, and Firebase to ensure innovative and seamless digital solutions.
                        </p>

                        <h3 className="border-b-4 border-pink-400 inline-block pr-6 font-SectionTitle text-3xl mb-3">Experience</h3>
                        <p>
                            In my journey as a front-end developer, I have accumulated valuable experience and honed my skills in web development. Working with HTML, CSS, and JavaScript, I&apos;ve crafted visually striking and responsive interfaces. My expertise extends to utilizing frameworks like React JS for dynamic user experiences. I&apos;ve seamlessly integrated MongoDB, Express JS, Tailwind CSS, and Firebase in projects, showcasing versatility and a commitment to staying at the forefront of innovative and efficient development practices.
                        </p>
                    </div>
                    <div className=''>
                        <img src={Abb} alt="" />
                    </div>
                </div>
                <div className='mt-5 px-3'>
                    <Experiance />
                    <Skills />
                </div>
            </div>
        </div>
    );
};

export default About;