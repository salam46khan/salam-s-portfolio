import { IoAccessibilitySharp } from "react-icons/io5";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { GiConfirmed, GiSkills } from "react-icons/gi";

const Choose = () => {
    return (
        <div className="py-12 px-3 font-NormalText container mx-auto">
            
            <div className=" flex justify-center text-center mb-3">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <h3 className="border-b-4 border-pink-400 inline-block px-3 font-SectionTitle text-3xl mb-3">Why Choose This Profession</h3>
                    <p className="w-full md:w-3/4 mx-auto">
                        Choosing front-end development isn&apos;t just about code. It&apos;s about blending my tech passion with a drive to make a difference.
                    </p>
                </div>

            </div>
            <div className=" w-full max-w-6xl mx-auto">
                <div data-aos="fade-up" data-aos-duration="1500" className="flex justify-center gap-4 flex-wrap">
                    <div className="bg-white/50 w-full md:max-w-xs rounded-md p-3 py-4 shadow-inner text-center shadow-black/20">
                        <IoAccessibilitySharp className="text-4xl text-pink-400 mx-auto" />
                        <p className="text-pink-400 font-bold text-xl mt-3">Accessible Entry Point</p>
                        <p className="text-xs mt-2">
                            Front-end development offers a welcoming entry point for individuals from diverse educational backgrounds
                        </p>
                    </div>
                    <div className="bg-white/50 w-full md:max-w-xs rounded-md p-3 py-4 shadow-inner text-center shadow-black/20">
                        <FaUserGraduate className="text-4xl text-pink-400 mx-auto" />
                        <p className="text-pink-400 font-bold text-xl mt-3">Self-Directed Learning</p>
                        <p className="text-xs mt-2">
                            As a self-taught front-end developer, you value the effectiveness of online learning tools such as YouTube and W3Schools.
                        </p>
                    </div>
                    <div className="bg-white/50 w-full md:max-w-xs rounded-md p-3 py-4 shadow-inner text-center shadow-black/20">
                        <FaUsers className="text-4xl text-pink-400 mx-auto" />
                        <p className="text-pink-400 font-bold text-xl mt-3">Community Support</p>
                        <p className="text-xs mt-2">
                            Front-end devs are super welcoming to newcomers, offering lots of help and resources for learning and making connections.
                        </p>
                    </div>
                    <div className="bg-white/50 w-full md:max-w-xs rounded-md p-3 py-4 shadow-inner text-center shadow-black/20">
                        <MdLocalOffer className="text-4xl text-pink-400 mx-auto" />
                        <p className="text-pink-400 font-bold text-xl mt-3">Job Satisfaction and Fulfillment</p>
                        <p className="text-xs mt-2">
                            Front-end dev rocks for creativity and personal growth, leading to a fulfilling career journey.
                        </p>
                    </div>
                    <div className="bg-white/50 w-full md:max-w-xs rounded-md p-3 py-4 shadow-inner text-center shadow-black/20">
                        <GiSkills className="text-4xl text-pink-400 mx-auto" />
                        <p className="text-pink-400 font-bold text-xl mt-3">Future-Proof Skills</p>
                        <p className="text-xs mt-2">
                            In an increasingly digital world, front-end development skills are in high demand across industries.
                        </p>
                    </div>
                    <div className="bg-white/50 w-full md:max-w-xs rounded-md p-3 py-4 shadow-inner text-center shadow-black/20">
                        <GiConfirmed className="text-4xl text-pink-400 mx-auto" />
                        <p className="text-pink-400 font-bold text-xl mt-3">Adaptability and Versatility</p>
                        <p className="text-xs mt-2">
                            Front-end skills are super adaptable and versatile, making them valuable across different industries and sectors.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Choose;