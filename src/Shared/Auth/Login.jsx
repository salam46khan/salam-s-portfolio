import { BiUser } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAlternateEmail, MdVpnKey } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {logInUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logInUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate('/')
        })
        .catch(err => {
            console.log(err);
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
                        <form onSubmit={handleLogin}>

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
                                <input className="bg-blue-400 py-2 w-full text-white px-8 rounded-full font-bold cursor-pointer" type="submit" value="Login" />
                            </div>
                            
                        </form>
                        
                        <div className="text-right mt-4">
                            <p>Don&apos;t have an account? <Link to={'/signup'} className="text-blue-500 font-bold">Sign Up</Link></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;