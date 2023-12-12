import { Link } from 'react-router-dom';
import roam from '../../../assets/1.png'
import news from '../../../assets/2.png'
import car from '../../../assets/3.png'
const ProjectSec = () => {
    return (
        <div className="py-12 px-3 font-NormalText">
            <div className="container mx-auto flex justify-center text-center mb-3">
                <div>
                    <h3 className="border-b-4 border-pink-400 inline-block px-3 font-SectionTitle text-3xl mb-3">My Project</h3>
                    <p className="w-full md:w-3/4 mx-auto">
                        Code that speaks, designs that resonate. My projects marry functionality with flair for memorable digital experiences.
                    </p>
                </div>
            </div>
            <div className="container mx-auto flex flex-wrap justify-center gap-5">
                <div className="max-w-[310px] border p-2 rounded-md">
                    <img className='w-full rounded' src={roam} alt="" />
                    <div className='text-center py-3'>
                        <p className='font-SectionTitle text-2xl'>Roam Plus</p>
                        <div className='flex justify-between mt-3'>
                            <Link to={'/'} className='main-btn'>Live Link</Link>
                            <Link to={'/'} className='main-btn'>Github</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-[310px] border p-2 rounded-md">
                    <img className='w-full rounded' src={roam} alt="" />
                    <div className='text-center py-3'>
                        <p className='font-SectionTitle text-2xl'>Roam Plus</p>
                        <div className='flex justify-between mt-3'>
                            <Link to={'/'} className='main-btn'>Live Link</Link>
                            <Link to={'/'} className='main-btn'>Github</Link>
                        </div>
                    </div>
                </div>
                <div className="max-w-[310px] border p-2 rounded-md">
                    <img className='w-full rounded' src={roam} alt="" />
                    <div className='text-center py-3'>
                        <p className='font-SectionTitle text-2xl'>Roam Plus</p>
                        <div className='flex justify-between mt-3'>
                            <Link to={'/'} className='main-btn'>Live link</Link>
                            <Link to={'/'} className='main-btn'>Github</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectSec;