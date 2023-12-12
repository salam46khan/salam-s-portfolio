import Contact from '../../Shared/Contact/Contact';
import './ContactPage.css'
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
                    <div className='contact-img-content'></div>
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