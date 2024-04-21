import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="bg-blue-500 py-10 px-3 text-white">
            <div className="container mx-auto flex justify-center items-center py-5">
                <div className='text-center'>
                    <div className='mb-7'>
                        <p className='text-3xl overflow-hidden font-bold inline-block border-4 border-white'>SALAM&apos;S<span className='bg-white py-3 text-blue-400'>PORTFOLIO</span></p>
                    </div>

                    <ul className='flex gap-5 -mt-3 justify-center flex-wrap'>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/contact'}>Contact</Link></li>
                        <li><Link to={'/'}>FAQ</Link></li>
                        <li><Link to={'/'}>Skill</Link></li>
                        <li><Link to={'/'}>Experiance</Link></li>
                        <li><Link to={'/'}>Education</Link></li>
                    </ul>
                    <div className='mt-3'>
                        <h3 className='text-xl font-semibold'>FOLLOW ME</h3>
                        <div className='mt-2 flex-wrap flex justify-center gap-3'>

                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-[#fff5]' target='_blank' to={'https://www.facebook.com/profile.php?id=100059831626442'}>
                                <FaFacebook></FaFacebook>
                            </Link>
                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-[#fff5]' target='_blank' to={'https://github.com/salam46khan'}>
                                <FaGithub></FaGithub>
                            </Link>
                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-[#fff5]' target='_blank' to={'https://www.linkedin.com/in/abdus-salam-867371223/'}>
                                <FaLinkedin></FaLinkedin>
                            </Link>
                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-[#fff5]' target='_blank' to={'https://www.instagram.com/salamkhan4646/'}>
                                <FaInstagram></FaInstagram>
                            </Link>
                            <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-[#fff5]' target='_blank' to={'https://twitter.com/SalamKhan796109'}>
                                <FaTwitter></FaTwitter>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>
            <hr />
            <p className='text-center mt-2'>Copyright 2023-2024 salam.com</p>
        </div>
    );
};

export default Footer;