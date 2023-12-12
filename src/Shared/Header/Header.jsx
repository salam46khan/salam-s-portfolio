import { Link, NavLink } from "react-router-dom";
import logo from '../../../public/logo.png'
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import './Header.css'

const Header = () => {
    const [navopen, setNavopen] = useState(false);

    const navItem = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/about'}>About Me</NavLink></li>
        <li><NavLink to={'/contact'}>Contact Me</NavLink></li>

    </>
    return (
        <div className="bg-violet-800 z-50 fixed top-0 left-0 w-full ">
            <div className="navbar container mx-auto relative flex justify-between items-center">

                <div className="logo">
                    <Link to={'/'}>
                        <img className="h-14 md:h-16  rounded-full" src={logo} alt="" />
                    </Link>
                </div>

                <div className="bar text-white text-2xl md:hidden block ml-auto">
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
                    <div className={`${navopen ? 'left-0' : 'left-[140%]'} nav block md:hidden  absolute w-full top-[62px] bg-opacity-80 duration-300 text-white bg-violet-800 `}>
                        <ul className="menu menu-vertical text-xl px-1">
                            {navItem}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;