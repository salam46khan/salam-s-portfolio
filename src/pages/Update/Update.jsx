import { FaLink } from "react-icons/fa";
import useIdentity from "../../hooks/useIdentity";
import useProjects from "../../hooks/useProjects";
import useResume from "../../hooks/useResume";
import { IoDocumentTextOutline } from "react-icons/io5";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import MyProjectTable from "./MyProjectTable";
import AddSkills from "./AddSkills";

const Update = () => {
    const [project] = useProjects()
    const [identity] = useIdentity();
    const [resume,  refetch] = useResume()
    const axiosPublic = useAxiosPublic()
    console.log(resume);
    console.log(identity);
    console.log(project);

    const handleUpdatResume = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const link = form.link.value;
        const resumeData = { name, link }
        console.log(resumeData);
        axiosPublic.put(`/resume/${resume[0]?._id}`, resumeData)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                }
            })
    }
    return (
        <div className="mt-16">
            <div className="py-10 container mx-auto">
                <div>
                    <div>
                        <p className="text-2xl">My Resume</p>
                        <hr />
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>SL No</th>
                                        <th>Name</th>
                                        <th>Link</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    {
                                        resume?.map(resume => (
                                            <tr key={resume._id}>
                                                <th>1</th>
                                                <td>{resume?.name}</td>
                                                <td>{resume?.link}</td>
                                                <td><button onClick={() => document.getElementById('my_modal_resume').showModal()} className="py-2 px-7 bg-pink-400 text-white">Update</button></td>
                                            </tr>
                                        ))
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="mt-10">
                        
                        <MyProjectTable></MyProjectTable>
                    </div>
                    <div className="mt-10">
                        <AddSkills></AddSkills>
                    </div>
                </div>

                <div>
                    <dialog id="my_modal_resume" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div>
                                <p className="text-3xl font-bold text-pink-400 text-center">Update Resume data</p>
                                <form onSubmit={handleUpdatResume}>
                                    <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                        <IoDocumentTextOutline className=" w-10" />
                                        <input
                                            type="text"
                                            required
                                            defaultValue={resume[0]?.name}
                                            className="flex-1 bg-inherit focus:outline-none"
                                            name="name"
                                        />
                                    </div>
                                    <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                        <FaLink className="w-10" />
                                        <input
                                            type="text"
                                            required
                                            defaultValue={resume[0]?.link}
                                            className="flex-1 bg-inherit focus:outline-none"
                                            name="link"
                                        />
                                    </div>
                                    <div>
                                        <input className="bg-blue-400 py-2 w-full text-white px-8 rounded-full font-bold cursor-pointer" type="submit" value="Login" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Update;