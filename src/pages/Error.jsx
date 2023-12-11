import { Link } from 'react-router-dom';
import err from '../assets/error.png'
const Error = () => {
    return (
        <div className='bg-violet-800 h-screen'>
            <div className="container mx-auto flex justify-center items-center h-full flex-col">
                <img className='w-full md:w-[80%] mx-auto' src={err} alt="" />
                <div className='text-red-200 text-center'>
                    <p className='text-xl'>Sorry! Page Not Found</p>
                    <div className='flex gap-2  mt-3'>
                        <Link to={-1}>
                            <button className='main-btn'>Go Back</button>
                        </Link>
                        <Link to={'/'}>
                            <button className='main-btn'>Go Home</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;