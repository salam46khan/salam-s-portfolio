import { Link } from 'react-router-dom';
import aboutImg from '../../../assets/about.jpeg';
import './AboutSec.css'
const AboutSec = () => {
    return (
        <div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 py-10 px-3 font-NormalText items-center">
                <div className='py-5 about flex justify-center items-center'>
                    <div className=" flex justify-center items-center relative">
                        <div className='h-[330px] w-[260px] md:h-[380px] img-back md:w-[310px] bg-blue-400 absolute z-0'></div>
                        <img className='h-[330px] w-[260px] md:w-[310px] md:h-auto img-front z-10' src={aboutImg} alt="" />
                    </div>
                </div>
                <div className="p-5">
                    <h3 className="border-b-4 border-pink-400 inline-block pr-6 font-SectionTitle text-3xl mb-3">About Me</h3>
                    <p>
                    Hey, I'm Abdus Salam, a passionate front-end developer with expertise in HTML, CSS, and JavaScript. I thrive on creating seamless user experiences, and my toolkit includes technologies like React.js, Tailwind CSS, Firebase, Express.js, and MongoDB.
                    </p>
                    <div className='mt-5'>
                    <Link className='main-btn text-black' to={'/about'}>Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSec;