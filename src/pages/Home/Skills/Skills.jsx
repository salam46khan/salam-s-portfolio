import { FaDatabase, FaFileCode, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
// import ProgressBar from "@ramonak/react-progress-bar";
import AOS from 'aos';
import useSkills from "../../../hooks/useSkills";
AOS.init();

const Skills = () => {
    const [skill] = useSkills()
    return (
        <div className=" py-14 px-3 font-NormalText">
            <div data-aos="fade-up" data-aos-duration="1500" className="container mx-auto text-center">
                <h3 className="border-b-4 border-pink-400 inline-block px-3 font-SectionTitle text-3xl mb-3">
                    My Skills
                </h3>
                <p className="md:w-2/4 mx-auto">
                    Skill is the seed, practice is the water, and dedication is the sunlight. Nurture your abilities, and watch your potential grow
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 pt-10 gap-10 items-center">
                <div className="flex flex-col gap-7">
                    <div className="flex gap-3">
                        <div className="w-12 flex items-center">
                            <FaFileCode className="text-5xl mx-auto" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-SectionTitle">Web Languages</h4>
                            <p>
                                I have expertise in web languages like HTML, CSS, JavaScript
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-12 flex items-center">
                            <SiTailwindcss className="text-5xl mx-auto" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-SectionTitle">CSS Frameworks</h4>
                            <p>
                                I have also expertise in CSS frameworks both Tailwind CSS, Bootstrap
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-12 flex items-center">
                            <FaReact className="text-5xl mx-auto" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-SectionTitle">JavaScript Frameworks</h4>
                            <p>
                                I am proficient in React.js for building dynamic and responsive user interfaces.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="w-12 flex items-center">
                            <FaDatabase className="text-5xl mx-auto" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-SectionTitle">Backend Tech & Databases</h4>
                            <p>
                                Expertise in backend technologies and databases, including proficiency in Express.js, MongoDB, and Firebase
                            </p>
                        </div>
                    </div>

                </div>
                {/* <div className="flex flex-col gap-2">
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">HTML</h2>
                            <p>90%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={90}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div className="">
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">CSS</h2>
                            <p>90%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={90}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">Javascript</h2>
                            <p>80%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={80}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">Tailwind CSS</h2>
                            <p>90%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={90}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">React JS</h2>
                            <p>80%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={80}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">MongoDB</h2>
                            <p>75%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={75}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">Express JS</h2>
                            <p>65%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={65}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">Firebase</h2>
                            <p>80%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={80}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">Next JS</h2>
                            <p>60%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={60}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <h2 className="font-SectionTitle">Mongoose</h2>
                            <p>50%</p>
                        </div>
                        <ProgressBar
                            animateOnRender={true}
                            bgColor='linear-gradient(59deg, #f0f, #55f)'
                            baseBgColor='#fff'
                            completed={50}
                            labelSize='12px'
                            height='17px'
                        />
                    </div>
                </div> */}

                <div className="flex flex-wrap gap-3 justify-center"  data-aos="fade-up" data-aos-duration="1500">
                    {
                        skill?.map(skill => (
                            <div key={skill?._id} className="w-full max-w-[165px] border p-2 pt-4 rounded hover:bg-white/40 duration-300 bg-white/40 hover:-translate-y-1 shadow hover:shadow-lg">
                                <img className="h-[40px] mx-auto" src={skill?.photo} alt="" />
                                <p className="text-xl text-center font-bold text-pink-400 mt-2">{skill?.skill_name}</p>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Skills;