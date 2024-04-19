import { Link } from 'react-router-dom';
import './Banner.css'
import useResume from '../../../hooks/useResume';
const Banner = () => {
    const [resume] = useResume()
    return (
        <div className='banner relative py-10 px-3 font-NormalText'>
            <div className='h-3/4 flex justify-center items-end'>
                <div className='text-center text-white'>
                    <div className='bg-blue-500 inline-block p-2 px-9 mb-4 relative'>
                        <p className='text-xl'>Hi there!, <span className='text-pink-400 font-bold'>I&apos;m</span></p>
                        <div className='absolute bg-blue-500 -bottom-2 right-5 rotate-45 h-5 w-5 -z-0'></div>
                    </div>
                    <h1 className='lg:text-8xl md:text-6xl text-4xl font-MainTitle'>ABDUS SALAM</h1>
                    <h3 className='font-SubTitle text-3xl text-pink-400 font-bold'>I am a front-end developer</h3>
                    <p className='text-base-300 text-xl max-w-[460px] mx-auto'>Expert with React, Javascript, Tailwind, MongoDB, Express Js, HTML and CSS</p>
                    <div className=' py-5'>
                        <Link className='main-btn' target='_blank' to={resume[0]?.link}>Download Resume</Link>
                    </div>
                </div>
            </div>
            <div className='absolute hidden md:block bottom-0 left-0 w-full md:h-1/4'>
                <div className="wavy"></div>
            </div>
        </div>
    );
};

export default Banner;