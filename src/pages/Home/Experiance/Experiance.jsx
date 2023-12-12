import myImg from '../../../assets/IMG20230506140933-01.jpeg'
const Experiance = () => {
    return (
        <div className="bg-base-200 py-12 px-3">
            <div className='container mx-auto'>
                <div className="bg-base-100 md:mx-28 grid grid-cols-1 lg:grid-cols-2 items-center ">
                    <img src={myImg} alt="" />
                    <div className='p-5'>
                        <h3 className="border-b-4 border-pink-400 inline-block pr-6 font-SectionTitle text-3xl mb-3">Experience</h3>
                        <div>
                            <h4 className='font-SectionTitle mt-2 text-xl '>Early Exploration (3 Years Ago)</h4>
                            <p>
                                Began the coding journey with HTML and CSS, laying the foundation for a deep understanding of web development from a young age.
                            </p>
                            <h4 className='font-SectionTitle mt-4 text-xl '>JavaScript Mastery (2 Years Ago)</h4>
                            <p>
                                Delved into the dynamic world of JavaScript two years ago, mastering its intricacies and unleashing the potential for interactive and responsive web applications.
                            </p>
                            <h4 className='font-SectionTitle mt-4 text-xl '>Focused Skill Development (Past Year)</h4>
                            <p>
                                Dedicated the past year to an intensive focus on React.js, MongoDB, Express.js, and related technologies, building a robust skill set in front-end and back-end development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experiance;