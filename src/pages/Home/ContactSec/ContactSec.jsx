import Contact from "../../../Shared/Contact/Contact";

const ContactSec = () => {
    return (
        <div className="py-12 px-3">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
                <div>
                <p>hii</p>
                </div>

                <div className="border p-5">
                    <Contact></Contact>
                </div>
            </div>
        </div>

    );
};

export default ContactSec;