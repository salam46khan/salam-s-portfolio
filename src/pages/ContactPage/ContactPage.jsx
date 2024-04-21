import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Contact from '../../Shared/Contact/Contact';
import './ContactPage.css'
import { Link } from 'react-router-dom';
const ContactPage = () => {
    return (
        <div>
            <div className="contact-banner">
                <div className="container mx-auto flex justify-center items-center h-full pt-16">
                    <p className="font-SubTitle font-bold md:text-7xl text-5xl text-pink-400">Contact Me</p>
                </div>
            </div>
            <div className='py-10 px-3 container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-3'>
                    {/* <div className='contact-img-content'></div> */}
                    <div>
                        <div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="my-10 flex justify-evenly items-center flex-col md:flex-row gap-4">
                                <div className="bg-white/30 shadow-black/20 w-full md:w-[45%] shadow-xl p-8 rounded-md">
                                    <p className="font-bold text-xl text-pink-400 ">Email</p>
                                    <p>salam46.khan@gmail.com</p>
                                </div>
                                <div className="bg-white/30 shadow-black/20 w-full md:w-[45%] shadow-xl p-8 rounded-md">
                                    <p className="font-bold text-xl text-pink-400 ">Phone</p>
                                    <p>+8801771-393709</p>
                                </div>
                            </div>
                            <div data-aos="fade-up" data-aos-duration="1500" className="my-10 flex justify-evenly items-center flex-col md:flex-row gap-4">
                                <div className="bg-white/30 shadow-black/20 w-full md:w-[45%] shadow-xl p-8 rounded-md">
                                    <p className="font-bold text-xl text-pink-400 ">Address</p>
                                    <p>Satkhira, Bangladesh</p>
                                </div>
                                <div className="bg-white/30 shadow-black/20 w-full md:w-[45%] shadow-xl p-8 rounded-md">
                                    <p className="font-bold text-xl text-pink-400 ">LinkedIn Profile</p>
                                    <p>www.linkedin.com/in/salam46khan</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='mt-2 flex-wrap flex justify-center gap-3'>

                                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-blue-400 text-white' target='_blank' to={'https://www.facebook.com/profile.php?id=100059831626442'}>
                                    <FaFacebook></FaFacebook>
                                </Link>
                                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-black text-white' target='_blank' to={'https://github.com/salam46khan'}>
                                    <FaGithub></FaGithub>
                                </Link>
                                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-blue-500 text-white' target='_blank' to={'https://www.linkedin.com/in/abdus-salam-867371223/'}>
                                    <FaLinkedin></FaLinkedin>
                                </Link>
                                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-pink-500 text-white' target='_blank' to={'https://www.instagram.com/salamkhan4646/'}>
                                    <FaInstagram></FaInstagram>
                                </Link>
                                <Link className='text-3xl h-12 w-12 flex justify-center items-center rounded-full bg-blue-300 text-white' target='_blank' to={'https://twitter.com/SalamKhan796109'}>
                                    <FaTwitter></FaTwitter>
                                </Link>


                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="border-b-4 border-pink-400 inline-block pr-6 font-SectionTitle text-3xl mb-3">Contact</h3>
                        <Contact></Contact>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;