import { PiStudentBold } from "react-icons/pi";
import { CgWebsite } from "react-icons/cg";
import { GoGoal } from "react-icons/go";

import AOS from 'aos';
import { FaCode } from "react-icons/fa";
AOS.init();
const Experiance = () => {
    return (
        <div className=" py-12 px-3">
            <div className='container mx-auto'>
                <div className="bg-base-100 w-full max-w-6xl mx-auto p-10 rounded-md bg-white/40 shadow-2xl shadow-black/20">
                    <div className='text-center'  data-aos="fade-up" data-aos-duration="1500">
                        <h3 className="border-b-4 text-center border-pink-400 px-2 inline-block  font-SectionTitle text-3xl mb-3">Learning Experience</h3>
                        <p className='w-full max-w-4xl mx-auto text-center'>
                            My journey from a non-cse background to becoming a front-end developer has been marked by continuous learning, hands-on experience, and a commitment to growth.
                        </p>
                    </div>
                    <div className='p-5 grid grid-cols-1 md:grid-cols-2 gap-4'  data-aos="fade-up" data-aos-duration="1500">
                        <div className='gap-2 p-3 md:bg-base-200 flex'>
                            <div className="w-12">
                                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-pink-400">
                                    <PiStudentBold className="text-2xl text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-pink-400">Self-Taught Learning</h2>
                                <p>
                                    Coming from a non-computer science background, I embarked on my front-end development journey through self-directed learning. YouTube tutorials and resources from W3Schools provided me with foundational knowledge in HTML, CSS, and JavaScript.
                                </p>
                            </div>
                        </div>
                        <div className='p-3 flex gap-2'>
                            <div className="w-12">
                                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-pink-400">
                                    <FaCode className="text-2xl text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-pink-400">Programming Hero</h2>
                                <p>
                                    Discovering the Programming Hero platform was a pivotal moment in my learning journey. Through their comprehensive curriculum, I gained proficiency in a wide range of technologies, including React.js, Express.js, MongoDB, Next.js, and CSS frameworks like Tailwind CSS and Bootstrap.
                                </p>
                            </div>
                        </div>
                        <div className='p-3 flex gap-2'>
                            <div className="w-12">
                                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-pink-400">
                                    <CgWebsite className="text-2xl text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-pink-400">Projects and Hands-On Experience</h2>
                                <p>
                                    With a solid understanding of front-end technologies and frameworks, I began building full-stack applications to apply my skills in real-world scenarios. From e-commerce platforms to social media clones, each project allowed me to leverage my knowledge of both front-end and back-end technologies to create dynamic and responsive web experiences.
                                </p>
                            </div>
                        </div>

                        <div className='border p-3 md:bg-base-200 flex gap-2'>
                            <div className="w-12">
                                <div className="h-10 w-10 rounded-full flex justify-center items-center bg-pink-400">
                                    <GoGoal className="text-2xl text-white" />
                                </div>
                            </div>
                            <div>
                                <h2 className="font-bold text-xl text-pink-400">Future Goal: Full-Stack Developer</h2>
                                <p>
                                    While I&apos;ve made significant progress as a front-end developer, my ultimate goal is to become a proficient full-stack developer. I plan to deepen my knowledge of backend technologies such as Node.js, Express.js, and MongoDB, while also expanding my expertise in front-end frameworks like React.js. By mastering both the client and server sides of web development.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiance;