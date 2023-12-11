import { Link } from 'react-router-dom';
import logo from '../../../public/logo.png'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="bg-violet-800 py-10 px-3 text-white">
            <div className="container mx-auto flex justify-center items-center py-5">
                <div className='text-center'>
                    <img className='h-20 mx-auto' src={logo} alt="" />
                    <ul className='flex gap-5 -mt-3 justify-center flex-wrap'>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/service'}>Service</Link></li>
                        <li><Link to={'/faq'}>FAQ</Link></li>
                        <li><Link to={'/about'}>Contact</Link></li>
                        <li><Link to={'/about'}>Contact</Link></li>
                        <li><Link to={'/about'}>Contact</Link></li>
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
            <p className='text-center mt-2'>Copyright 2023-2024 salam46.com</p>
        </div>
    );
};

export default Footer;