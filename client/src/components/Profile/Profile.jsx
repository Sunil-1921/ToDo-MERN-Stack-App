import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setLogin } from '../../actions';

const Profile = () => {

    const [userDetails, setUserDetails] = useState({});

    const loginStatusRedux = useSelector((state) => state.setLogin);
    const userData = useSelector((state) => state.setUser);

    const dispatch = useDispatch();

    useEffect(() => {
        setUserDetails({ fullname: userData?.fullname, email: userData?.email })
        const cookie = Cookies.get("jwtoken");
        if (cookie) {
            dispatch(setLogin(true))
        }
        else {
            dispatch(setLogin(false))
        }
    }, [])
    return (
        <>
            {loginStatusRedux ? (
                <section className="py-12 flex flex-col justify-center items-center overflow-y-auto">
                    <div className="profile-image flex flex-col items-center ">
                        <div className="image w-52 h-52 mb-4 bg-gray-400 rounded-full"></div>
                        <p className="cursor-pointer underline">Update Image</p>
                    </div>
                    <div className="profile-info w-4/5 h-fit my-3r px-40 py-10 flex flex-col items-center">
                        {/* <div className="name h-fit w-full flex justify-between"> */}
                        <div className="firstname flex justify-between items-center w-5/12">
                            <label>Full Name:</label>
                            <input className="w-fit h-10 mx-2 my-1 px-1 border-2" value={userDetails?.fullname} onChange={(e) => setUserDetails({ ...userDetails, fullname: e.target.value })} type="text" name="firstname" placeholder="First Name" id="" required />
                        </div>
                        {/* <div className="lastname flex justify-between items-center w-5/12">
                                <label>Last Name:</label>
                                <input className="w-fit h-10 mx-2 my-1 px-1 border-2" type="text" name="lastname" placeholder="Last Name" id="" required />
                            </div> */}
                        {/* </div> */}
                        {/* <div className="contact w-full flex justify-between"> */}
                        <div className="email flex justify-between items-center w-5/12">
                            <label>Email Id:</label>
                            <input className="w-fit h-10 mx-2 my-1 px-1 border-2" value={userDetails?.email} onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} type="text" name="emailid" placeholder="Email Id" id="" required />
                        </div>
                        <div className="phone flex justify-between items-center w-5/12">
                            <label>Phone No.:</label>
                            <input className="w-fit h-10 mx-2 my-1 px-1 border-2" type="text" name="phonenumber" placeholder="Phone Number" id="" />
                        </div>
                        {/* </div> */}
                        {/* <div className="contact w-full flex justify-between"> */}
                        <div className="city flex justify-between items-center w-5/12">
                            <label>City:</label>
                            <input className="w-fit h-10 mx-2 my-1 px-1 border-2" type="text" name="city" placeholder="City Name" id="" />
                        </div>
                        <div className="country flex justify-between items-center w-5/12">
                            <label>Country:</label>
                            <input className="w-fit h-10 mx-2 my-1 px-1 border-2" type="text" name="country" placeholder="Country Name" id="" required />
                        </div>
                        {/* </div> */}
                    </div>
                    <div className="btn flex justify-center items-center">
                        <button className="px-20 py-2 bg-green-500 hover:bg-green-600 text-white text-xl rounded-md">Save</button>
                    </div>
                </section>
            ) : (
                <Link to="/login" className="h-full text-3xl cursor-pointer flex items-center justify-center">Login required</Link>
            )}
        </>
    )
}

export default Profile;