import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import './Header.css'
import { BiUser } from "react-icons/bi";
import { IoMdLogOut } from "react-icons/io";

import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useIdentity from "../../hooks/useIdentity";

const Header = () => {
    const [identity] = useIdentity()
    const isAdmin = identity[0]?.isAdmin;
    const [navopen, setNavopen] = useState(false);
    const { user,logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }
    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About Me</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Me</NavLink></li>
        {
            isAdmin ?  <li><NavLink to={'/update'}>Update data</NavLink></li> : ''
        }
    </>
    return (
        <div className="bg-blue-500 z-50 fixed top-0 left-0 w-full ">
            <div className="navbar container mx-auto relative flex justify-between items-center">

                <div className="logo">
                    <Link to={'/'}>
                        <p className="font-bold text-white">Salam</p>
                    </Link>
                </div>

                <div className="bar items-center justify-center z-40 flex text-white text-2xl md:hidden ml-auto">
                    <button onClick={() => setNavopen(!navopen)}>
                        {
                            navopen ? <ImCross /> : <FaBars />
                        }
                    </button>
                </div>
                <div id="nav">
                    <div className="nav hidden md:block text-white ml-auto ">
                        <ul className="menu menu-horizontal text-xl px-1">
                            {navItem}
                        </ul>
                    </div>
                    <div className={`${navopen ? 'left-0' : 'left-[140%]'} nav block md:hidden  absolute w-full top-[62px] bg-opacity-80 duration-300 text-white bg-blue-500 `}>
                        <ul className="menu menu-vertical text-xl px-1">
                            {navItem}
                        </ul>
                    </div>
                </div>
                <div className="relative ms-2">
                    <div className="h-[45px] w-[45px] rounded-full overflow-hidden flex justify-center items-center z-40">

                        {
                            user ?
                                <button onClick={handleLogout} className="text-pink-400 h-full w-full justify-center items-center flex cursor-pointer bg-white">
                                    <IoMdLogOut className="text-2xl text-red-500" />
                                </button>
                                :
                                <NavLink to={'/login'} className="h-full w-full flex justify-center items-center">
                                    <BiUser className="text-2xl text-white" />
                                </NavLink>
                        }



                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;