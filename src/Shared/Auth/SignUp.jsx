import { useContext } from "react";
import { BiUser } from "react-icons/bi";
import { MdOutlineAlternateEmail, MdVpnKey } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email,
                    name,
                    isAdmin: false
                }
                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
                navigate('/')
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="pt-16">
            <div className="container mx-auto py-10">


                <div className="mt-16 w-full max-w-lg pt-10 px-10 pb-4 bg-white/20 rounded-lg shadow-2xl shadow-black/30 mx-auto relative">
                    <div className="h-20 w-20 rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-white border-blue-400 flex justify-center items-center">

                        <BiUser className="text-4xl text-blue-400" />
                    </div>

                    <div className="pt-5">
                        <form onSubmit={handleSignUp}>

                            <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                <RiUserLine className=" w-10" />
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your full name"
                                    className="flex-1 bg-inherit focus:outline-none"
                                    name="name"
                                />
                            </div>
                            <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                <MdOutlineAlternateEmail className=" w-10" />
                                <input
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="flex-1 bg-inherit focus:outline-none"
                                    name="email"
                                />
                            </div>
                            <div className=" border  rounded-full overflow-hidden px-2 py-2 my-4 flex items-center">
                                <MdVpnKey className="w-10" />
                                <input
                                    type="password"
                                    required
                                    placeholder="Enter your password"
                                    className="flex-1 bg-inherit focus:outline-none"
                                    name="password"
                                />
                            </div>
                            <div>
                                <input className="bg-blue-400 py-2 w-full text-white px-8 rounded-full font-bold cursor-pointer" type="submit" value="Signup" />
                            </div>


                        </form>

                        <div className="text-right mt-8">
                            <p>Already have an account? <Link to={'/login'} className="text-blue-500 font-bold">Login</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;