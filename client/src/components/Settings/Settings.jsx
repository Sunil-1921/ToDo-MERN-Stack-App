import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import Cookies from 'js-cookie';
import { setLogin } from "../../actions";

const Settings = () => {
    const loginStatusRedux = useSelector((state) => state.setLogin);

    const dispatch = useDispatch();

    useEffect(() => {
        const cookie = Cookies.get("jwtoken");
        if (cookie) {
            dispatch(setLogin(true))
        }
        else {
            dispatch(setLogin(false))
        }
    })
    return (
        <>
            {loginStatusRedux ? (

                <div className="container flex flex-col items-center mx-auto py-8 overflow-y-auto">
                    <h1 className="text-3xl font-bold mb-4">Settings</h1>

                    {/* <!-- Profile Settings --> */}
                    {/* <div className="mb-6 flex flex-col items-center">
                    <h2 className="text-xl font-semibold mb-2">Profile Settings</h2>
                    <div className="space-y-4 text-center">
                        <div className="flex items-center">
                            <label className="w-20">Picture:</label>
                            <input type="file" className="rounded-lg border bg-white px-4 py-2 w-full" />
                            </div>
                        <div className="flex items-center">
                            <label className="w-20">First Name:</label>
                            <input type="text" className="rounded-lg border px-4 py-2 w-full" value="John" />
                        </div>
                        <div className="flex items-center">
                            <label className="w-20">Last Name:</label>
                            <input type="text" className="rounded-lg border px-4 py-2 w-full" value="Doe" />
                        </div>
                        <div className="flex bg-blue-200 items-center">
                            <label className="w-20">Email:</label>
                            <input type="email" className="rounded-lg border px-4 py-2 w-full" value="john@example.com" />
                        </div>
                        <div className="flex bg-blue-200 items-center">
                            <label className="w-20">Change password:</label>
                            <input type="email" className="rounded-lg border px-4 py-2 w-full" placeholder="Current Password" />
                        </div>
                        <div class="flex bg-blue-200 items-center">
                            <span className="w-20"></span>
                            <input type="email" class="rounded-lg border px-4 py-2 w-full" placeholder="New Password" />
                        </div>
                        <div class="flex bg-blue-200 items-center">
                        <span className="w-20"></span>
                        <input type="email" class="rounded-lg border px-4 py-2 w-full" placeholder="Confirm Password" />
                        </div>
                        <button class="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2">Change Password</button>
                    </div>
                </div> */}

                    {/* <!-- Notification Settings --> */}
                    {/* <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Notification Settings</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox" />
                                <span>Task Reminders</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox" />
                                <span>Project Updates</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="checkbox" className="form-checkbox" />
                                <span>Deadline Alerts</span>
                            </label>
                        </div>
                    </div> */}

                    {/* <!-- Task Sorting --> */}
                    {/* <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Task Sorting</h2>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <label className="w-20">Sort By:</label>
                                <select className="rounded-lg border px-4 py-2 mx-10">
                                    <option value="due-date">Date Created</option>
                                </select>
                                <span className="w-20"></span>
                                <select className="rounded-lg border px-4 py-2">
                                    <option value="asc">Ascending</option>
                                    <option value="desc">Descending</option>
                                </select>
                            </div>
                            <div className="flex items-center">
                            </div>
                        </div>
                    </div> */}

                    {/* <!-- Theme Selection --> */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Theme Selection</h2>
                        <div className="space-y-2">
                            <label className="flex items-center space-x-2">
                                <input type="radio" className="form-radio" name="theme" value="light" defaultChecked />
                                <span>Light Theme</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input type="radio" className="form-radio" name="theme" value="dark" />
                                <span>Dark Theme</span>
                            </label>
                            {/* <label className="flex items-center space-x-2">
                                <input type="radio" className="form-radio" name="theme" value="colorful" />
                                <span>Colorful Theme</span>
                            </label> */}
                        </div>
                    </div>

                    {/* <!-- Time Zone Configuration --> */}
                    {/* <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Time Zone</h2>
                        <select className="rounded-lg border px-4 py-2 w-full">
                            <option value="GMT+02:00">GMT+02:00 (Amsterdam)</option>
                            <option value="GMT-08:00">GMT-08:00 (Los Angeles)</option>
                            <option value="GMT+05:30">GMT+05:30 (New Delhi)</option>
                        </select>
                    </div> */}

                    {/* <!-- Password and Security --> */}
                    <div className="my-6 w-1/3 ">
                        <h2 className="text-center text-xl font-semibold mb-2">Password and Security</h2>
                        <div className="flex justify-evenly">
                            {/* <label className="w-fit h-fit py-2">Change password:</label> */}
                            <div className="input-password w-1/2">
                                <input type="email" className="rounded-lg border mb-2 px-4 py-2" placeholder="Current Password" />
                                <input type="email" className="rounded-lg border mb-2 px-4 py-2" placeholder="New Password" />
                                <input type="email" className="rounded-lg border mb-2 px-4 py-2" placeholder="Confirm Password" />
                            </div>
                        </div>
                        <div className="flex justify-center">

                            <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-fit px-4 py-2">Change Password</button>
                        </div>
                        {/* <div className="flex bg-blue-200 items-center">
                        <span className="w-20"></span>
                        </div>
                        <div className="flex bg-blue-200 items-center">
                        <span className="w-20"></span>
                    </div> */}
                    </div>

                    {/* <!-- Language Preference --> */}
                    {/* <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Language Preference</h2>
                        <div className="flex items-center">
                            <label className="w-20">Language:</label>
                            <select className="rounded-lg border px-4 py-2 w-full">
                                <option value="english">English</option>
                                <option value="french">French</option>
                                <option value="spanish">Spanish</option>
                                <option value="german">German</option>
                            </select>
                        </div>
                    </div> */}

                    {/* <!-- Help and Support --> */}
                    <div className="my-6">
                        <h2 className="text-xl text-center font-semibold mb-2 ">Help and Support</h2>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mx-1">FAQ</button>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2 mx-1">Contact Support</button>
                    </div>

                    <button className="lg:mt-10 bg-green-500 hover:bg-green-600 text-white rounded-lg px-4 py-2">Save Changes</button>
                </div>
            ) : (
                <Link to="/login" className="h-full text-3xl cursor-pointer flex items-center justify-center">Login required</Link>
            )}
        </>
    )
}

export default Settings;