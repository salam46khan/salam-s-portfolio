import './About.css'
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
                            Hello, I'm Abdus Salam, a dedicated front-end developer passionate about crafting immersive and visually appealing web experiences. With expertise in HTML, CSS, and JavaScript, and proficiency in frameworks like React JS, I specialize in creating dynamic and user-friendly interfaces. <br />
                            My commitment to excellence extends to utilizing technologies such as MongoDB, Express JS, Tailwind CSS, and Firebase to ensure innovative and seamless digital solutions.
                        </p>
                    </div>
                    <div className='img-content'></div>
                </div>
                <div className='mt-5 px-3'>
                    <h3 className="border-b-4 border-pink-400 inline-block pr-6 font-SectionTitle text-3xl mb-3">Experience</h3>
                    <p>
                    In my journey as a front-end developer, I have accumulated valuable experience and honed my skills in web development. Working with HTML, CSS, and JavaScript, I've crafted visually striking and responsive interfaces. My expertise extends to utilizing frameworks like React JS for dynamic user experiences. I've seamlessly integrated MongoDB, Express JS, Tailwind CSS, and Firebase in projects, showcasing versatility and a commitment to staying at the forefront of innovative and efficient development practices.
                    </p>

                    <div>
                            <h4 className='font-SectionTitle mt-2 text-xl '>Early Exploration (3 Years Ago)</h4>
                            <p>
                                Began the coding journey with HTML and CSS, laying the foundation for a deep understanding of web development from a young age.
                            </p>
                            <h4 className='font-SectionTitle mt-4 text-xl '>JavaScript Mastery (2 Years Ago)</h4>
                            <p>
                                Delved into the dynamic world of JavaScript two years ago, mastering its intricacies and unleashing the potential for interactive and responsive web applications.
                            </p>
                            <h4 className='font-SectionTitle mt-4 text-xl '>Focused Skill Development (Past Year)</h4>
                            <p>
                                Dedicated the past year to an intensive focus on React.js, MongoDB, Express.js, and related technologies, building a robust skill set in front-end and back-end development.
                            </p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default About;