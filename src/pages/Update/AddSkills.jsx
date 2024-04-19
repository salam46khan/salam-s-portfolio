import { useState } from "react";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { GiStrong } from "react-icons/gi";
import useSkills from "../../hooks/useSkills";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddSkills = () => {
    const [image, setImage] = useState(null);
    const axiosPublic = useAxiosPublic()
    const [skill, refetch] = useSkills()
    // console.log(skill);

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

    const handleAddSkill = event => {
        event.preventDefault()
        const form = event.target;
        const skill_name = form.skill_name.value;
        const photo = image;

        const skillInfo = { skill_name, photo }
        // console.log(skillInfo);

        axiosPublic.post('/skill', skillInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.insertedId) {
                    refetch()
                    form.reset()
                }
            }
            )
    }

    const handleDelete = id => {
        // console.log(id);
        axiosPublic.delete(`/skill/${id}`)
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
                <p className="text-2xl">My Skills</p>
                <div>
                    <button className="py-2 px-7 bg-pink-400 text-white" onClick={() => document.getElementById('my_modal_skill').showModal()}>Add Skill</button>
                </div>
            </div>

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Logo</th>
                                <th>Name</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                skill?.map(skill => (
                                    <tr key={skill._id}>
                                        <th>
                                            <img className="h-[30px]" src={skill?.photo} alt="" />
                                        </th>
                                        <td>{skill?.skill_name}</td>
                                        <td>
                                            <button className="btn btn-circle btn-ghost" onClick={() => handleDelete(skill?._id)}>
                                                <RiDeleteBin6Line className="text-red-400 text-2xl" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            }


                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <dialog id="my_modal_skill" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <div>
                            <p className="text-3xl font-bold text-pink-400 text-center">Add Skill</p>
                            <form onSubmit={handleAddSkill}>
                                <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                    <GiStrong className=" w-10" />
                                    <input
                                        type="text"
                                        required
                                        placeholder="Enter Skill name"
                                        className="flex-1 bg-inherit focus:outline-none"
                                        name="skill_name"
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
                                <div>
                                    <input className="bg-blue-400 py-2 w-full text-white px-8 rounded-full font-bold cursor-pointer" type="submit" value="Login" />
                                </div>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AddSkills;