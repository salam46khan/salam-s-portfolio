import Contact from "../../../Shared/Contact/Contact";
// import { useLottie } from "lottie-react";
// import groovyWalkAnimation from "../../../../public/contact.json";
import contacat_pic from '../../../assets/contacat.png'
import AOS from 'aos';
AOS.init();

const ContactSec = () => {
    // const options = {
    //     animationData: groovyWalkAnimation,
    //     loop: true
    // };
    // const { View } = useLottie(options);
    return (
        <div className="py-12 px-3 font-NormalText">
            <div className="container mx-auto flex justify-center text-center mb-3">
                <div data-aos="fade-up" data-aos-duration="1500">
                    <h3 className="border-b-4 border-pink-400 inline-block px-3 font-SectionTitle text-3xl mb-3">Contact Me</h3>
                    <p className="w-full md:w-3/4 mx-auto">
                        Bringing pixels to life and crafting seamless digital experiences. Let&apos;s turn ideas into reality—contact me, and let the front-end journey begin!
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid items-center justify-center grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div className="w-full mx-auto">
                        {/* {View} */}
                        <img className="w-full h-full" src={contacat_pic} alt="" />
                    </div>
                </div>

                <div className=" p-5">
                    <div  data-aos="fade-up" data-aos-duration="1500" className="my-10 flex justify-evenly items-center flex-col md:flex-row gap-4">
                        <div className="bg-white/30 shadow-black/20 w-full md:w-[45%] shadow-xl p-8 rounded-md">
                            <p className="font-bold text-xl text-pink-400 ">Email</p>
                            <p>salam46.khan@gmail.com</p>
                        </div>
                        <div className="bg-white/30 shadow-black/20 w-full md:w-[45%] shadow-xl p-8 rounded-md">
                            <p className="font-bold text-xl text-pink-400 ">Phone</p>
                            <p>+8801771-393709</p>
                        </div>
                    </div>
                    <Contact></Contact>
                </div>
            </div>
        </div>

    );
};

export default ContactSec;