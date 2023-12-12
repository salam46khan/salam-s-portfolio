import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {
    
    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const publicKye = import.meta.env.VITE_PUBLIC_KEY;

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${serviceId}`, `${templateId}`, form.current, `${publicKye}`)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your message send successfully",
                    showConfirmButton: false,
                    timer: 2500
                  });
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className=" ">
            <form className='card-body bg-base-200 rounded-lg overflow-hidden' ref={form} onSubmit={sendEmail}>
                <div className='form-control'>
                    <label>Name</label>
                    <input className="input input-bordered" type="text" name="user_name" placeholder='Name' required/>
                </div>
                <div className='form-control'>
                    <label>Email</label>
                    <input className="input input-bordered" type="email" name="user_email" placeholder='Email' required/>
                </div>
                <div className='form-control'>
                    <label>Message</label>
                    <textarea placeholder='Text...' className='textarea textarea-bordered' name="message" />
                </div>

                <div className=' flex justify-center mt-2'>
                    <input className='main-btn  hover:text-black' type="submit" value="Send" />
                </div>
            </form>
        </div>
    );
};

export default Contact;