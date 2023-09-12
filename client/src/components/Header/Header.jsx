import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Header = () => {
    const [showNavLinks, setShowNavLinks] = useState(false);
    // const [showSearch, setShowSearch] = useState(false); 
    const loginStatusRedux = useSelector((state) => state.setLogin);
    const userData = useSelector((state) => state.setUser);
    console.log("header user=", userData)
    let username = "temp";
    if (userData) {
        username = userData?.fullname;
        console.log("if")
    }
    else {
        console.log("else")
        username = "Username";
    }
    // let username = userData ? userData?.fullname : "Username";
    // console.log("username=", username)
    return (
        <>
            <header className="w-full h-20 sticky top-0 shadow-lg z-10 bg-white">
                <nav className="px-2 py-3 w-full h-full flex items-center justify-between">
                    <button className="w-8 text-xl cursor-pointer lg:hidden" onClick={() => setShowNavLinks(!showNavLinks)}>
                        <i className={showNavLinks ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
                    </button>
                    {/* <div className="w-screen h-full list-none text-xl flex items-center justify-evenly"> */}
                    <div className="w-screen h-full list-none text-xl flex items-center justify-center">
                        {/* <input className="mx-5 h-3/4 px-2 w-1/2 text-xl hidden border border-1 border-gray-300 sm:block" type="text" placeholder="Search" /> */}
                        {/* <li className={"mx-2 text-xl block cursor-pointer sm:hidden " + (showSearch ? "transform rotate-90" : "")} onClick={() => setShowSearch(!showSearch)}>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </li> */}
                        {/* <input className={"transition duration-700 sm:hidden " + (showSearch ? "ease-out w-auto" : "ease-in w-0")} type="text" placeholder="Search" /> */}
                        {/* <li className="mx-2 cursor-pointer"><i className="fa-regular fa-circle-question"></i></li> */}
                        {/* <li className="mx-2 cursor-pointer"><i className="fa-regular fa-bell"></i></li> */}
                        {/* <Link to="/profile" className="mx-2 cursor-pointer">{username}</Link> */}
                        {loginStatusRedux ? (
                            <>
                                <Link to="/profile" className="mx-2 cursor-pointer">{userData?.fullname}</Link>
                                <Link to="/profile"><div className="mx-2 cursor-pointer w-12 h-12 bg-gray-400 rounded-full"></div></Link>
                            </>
                        ) : (<></>)}
                    </div>
                </nav>
                <aside className={"transition duration-200 lg:hidden xl:hidden bg-white shadow-2xl " + (showNavLinks ? "ease-out translate-x-0" : "ease-in -translate-x-full")}>
                    <section className="w-full h-full list-none flex flex-col items-center justify-center">
                        {/* <li className="w-full px-5"><input className="w-full h-12 px-5 text-xl sm:hidden border border-1 border-gray-300" type="text" placeholder="Search" /></li> */}
                        <Link to="/" onClick={() => setShowNavLinks(false)} className="px-5 py-1 w-full h-12 text-center text-2xl text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black active:bg-gray-50 active:text-black">Home</Link>
                        <Link to="/" onClick={() => setShowNavLinks(false)} className="px-5 py-1 w-full h-12 text-center text-2xl text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black active:bg-gray-50 active:text-black">Stats</Link>
                        <Link to="/projects" onClick={() => setShowNavLinks(false)} className="px-5 py-1 w-full h-12 text-center text-2xl text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black active:bg-gray-50 active:text-black">Projects</Link>
                        <Link to="/" onClick={() => setShowNavLinks(false)} className="px-5 py-1 w-full h-12 text-center text-2xl text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black active:bg-gray-50 active:text-black">Profile</Link>
                        <Link to="/" onClick={() => setShowNavLinks(false)} className="px-5 py-1 w-full h-12 text-center text-2xl text-gray-500 cursor-pointer hover:bg-gray-100 hover:text-black active:bg-gray-50 active:text-black">Calendar</Link>
                    </section>
                </aside>
            </header >
        </>
    )
}

export default Header;