import Contact from "../../../Shared/Contact/Contact";
import { useLottie } from "lottie-react";
import groovyWalkAnimation from "../../../../public/contact.json";
const ContactSec = () => {
    const options = {
        animationData: groovyWalkAnimation,
        loop: true
    };
    const { View } = useLottie(options);
    return (
        <div className="py-12 px-3 font-NormalText">
            <div className="container mx-auto flex justify-center text-center mb-3">
                <div>
                    <h3 className="border-b-4 border-pink-400 inline-block px-3 font-SectionTitle text-3xl mb-3">Contact Me</h3>
                    <p className="w-full md:w-3/4 mx-auto">
                        Bringing pixels to life and crafting seamless digital experiences. Let's turn ideas into reality—contact me, and let the front-end journey begin!
                    </p>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <div className="md:w-[65%] w-full mx-auto">
                        {View}
                    </div>
                </div>

                <div className=" p-5">
                    <Contact></Contact>
                </div>
            </div>
        </div>

    );
};

export default ContactSec;