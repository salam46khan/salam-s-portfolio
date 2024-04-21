
import useProjects from "../../hooks/useProjects";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { RiDeleteBin6Line } from "react-icons/ri";

const MyProjectTable = () => {
    const [project, refetch] = useProjects()
    const [image, setImage] = useState(null);
    const axiosPublic = useAxiosPublic()

    const handleUploadImage = event => {
        event.preventDefault()
        const img = event.target.files[0]
        const formData = new FormData();
        formData.append('image', img);

        fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_imgKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data.data);
                setImage(data.data.display_url)
            })
    }


    const handleAddProject = event => {
        event.preventDefault()
        const from = event.target;
        const project_name = from.project_name.value;
        const live_link = from.live_link.value;
        const github_link = from.github_link.value;
        const description = from.description.value;
        const photo = image

        const projectInfo = { project_name, live_link, github_link, description, photo }
        // console.log(projectInfo);
        axiosPublic.post('/project', projectInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    refetch()
                    from.reset()
                }
            }
            )
    }


    const handleDelete = id => {
        // console.log(id);
        axiosPublic.delete(`/project/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                }
            })
    }
    return (
        <div>
            <div className="flex justify-between items-center py-4">
                <p className="text-2xl">My Project</p>
                <div>
                    <button className="py-2 px-7 bg-pink-400 text-white" onClick={() => document.getElementById('my_modal_project').showModal()}>Add Project</button>
                </div>
            </div>
            <hr />
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Project Name</th>
                            <th>Description</th>
                            <th>Live Link</th>
                            <th>Github Link</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            project?.map(project => (
                                <tr key={project._id}>
                                    <th>
                                        <img src={project?.photo} className="h-[40px] w-auto" alt="" />
                                    </th>
                                    <td>{project?.project_name}</td>
                                    <td>{project?.description}</td>
                                    <td>{project?.live_link}</td>
                                    <td>{project?.github_link}</td>
                                    <td>
                                        <button className="btn btn-circle btn-ghost" onClick={() => handleDelete(project?._id)}>
                                            <RiDeleteBin6Line className="text-red-400 text-2xl" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <div>
                <dialog id="my_modal_project" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <p className="text-3xl text-center font-bold text-pink-400">Add Project</p>
                            <form onSubmit={handleAddProject}>
                                <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                    <IoDocumentTextOutline className=" w-10" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter Project Name"
                                        className="flex-1 bg-inherit focus:outline-none"
                                        name="project_name"
                                    />
                                </div>
                                <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                    <FaLink className=" w-10" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter Live Link"
                                        className="flex-1 bg-inherit focus:outline-none"
                                        name="live_link"
                                    />
                                </div>
                                <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                    <FaLink className=" w-10" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter Github Link"
                                        className="flex-1 bg-inherit focus:outline-none"
                                        name="github_link"
                                    />
                                </div>
                                <div className=" border  rounded-full overflow-hidden my-4 flex items-center">
                                    <input
                                        type="file"
                                        required
                                        onChange={handleUploadImage}
                                        className="file-input  w-full"
                                        name="photo"
                                    />
                                </div>
                                <div className=" border  rounded-full overflow-hidden my-4 flex items-center">
                                    <textarea
                                        name="description"
                                        required
                                        placeholder="Enter project description"
                                        className="textarea w-full  focus:outline-none"></textarea>
                                </div>

                                <div>
                                    <input className="bg-blue-400 py-2 w-full text-white px-8 rounded-full font-bold cursor-pointer" type="submit" value="Add Project" />
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyProjectTable;