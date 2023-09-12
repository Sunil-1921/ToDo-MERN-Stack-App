import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const SideBar = () => {

    const loginStatusRedux = useSelector((state) => state.setLogin);

    const navigate = useNavigate();

    const handleLogout = async () => {
        Cookies.remove("jwtoken");
        await navigate("/");
        window.location.reload();
    }
    return (
        <>
            <aside className="h-full flex flex-col justify-between border-r-4 border-gray-100">
                <div className="">
                    <Link to='/'>
                        <h1 className="my-6 py-4 text-2xl xl:text-4xl text-center font-bold">
                            <span className="text-sky-500">T</span>odo<span className="text-sky-500">H</span>ub
                        </h1>
                    </Link>
                    <hr />
                    <div className="my-16 list-none">
                        <Link to='/'>
                            <li className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                                Home
                            </li>
                        </Link>
                        {/* <Link to='/'>
                            <li className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                                Stats
                            </li>
                        </Link> */}
                        <Link to='/profile'>
                            <li className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                                Profile
                            </li>
                        </Link>
                        <Link to='/projects'>
                            <li className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                                Projects
                            </li>
                        </Link>
                        {/* <Link to='/'>
                            <li className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                                Calendar
                            </li>
                        </Link> */}
                    </div>
                </div>
                <div className="list-none mb-16">
                    <Link to="/settings" >
                        <li className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                            Settings
                        </li>
                    </Link>
                    {loginStatusRedux ? (
                        // <Link to="/signup" >
                        <li onClick={handleLogout} className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                            Logout
                        </li>
                        // </Link>
                    ) : (
                        <Link to="/login" >
                            <li className="hover:bg-blue-50 py-1 h-16 flex items-center justify-center text-xl xl:text-2xl cursor-pointer text-gray-500">
                                Login
                            </li>
                        </Link>
                    )}
                </div>
            </aside>
        </>
    )
}

export default SideBar;