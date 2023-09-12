import { useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { setToken } from '../../actions';
import Cookies from 'js-cookie';
import { useLoginStatusCheck } from '../../hooks/useLoginStatusCheck';
import { setLogin, setUser } from '../../actions';

const Login = () => {

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const [loginStatus, setLoginStatus] = useState(false);

    const loginStatusRedux = useSelector((state) => state.setLogin)
    const dispatch = useDispatch();

    useLoginStatusCheck(setLoginStatus);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userData = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        }
        try {
            const response = await axios.post("http://localhost:5000/auth/login", userData, {
                withCredentials: true,
            });
            console.log("login response=", response);
            dispatch(setUser(response?.data?.data?.data))
            if (Cookies.get("jwtoken")) {
                dispatch(setLogin(true))
                // setLoginStatus(true)
            }
            else {
                dispatch(setLogin(false))
                // setLoginStatus(false);
            }
            // console.log("dispatch=", response?.data?.data?.token)
            // dispatch(setToken(response?.data?.data?.token))
            console.log("cookie=", Cookies.get("jwtoken"))
        }
        catch (error) {
            console.log("error while login...")
        }
    }

    return (
        <>
            {loginStatusRedux ? (<div className='w-full h-full text-3xl flex justify-center items-center'>User Already logged in</div>) : (
                <>
                    <Link to="/" className='w-fit px-3 my-5 text-blue-500 absolute hover:cursor-pointer'>&lt;Back</Link>
                    <form className="form flex flex-col h-full justify-center items-center" onSubmit={(event) => handleSubmit(event)}>
                        <h1 className='text-3xl mb-20 font-semibold'>User Login</h1>
                        <div className=" w-full flex flex-col justify-center items-center">
                            <div className="w-1/2 my-4 flex justify-between">
                                <label className='text-2xl font-bold'>Username:</label>
                                <input className='w-1/2 h-12 px-2 border-2 border-gray-400 text-2xl rounded-lg' type="email" ref={usernameRef} name="username" id="username" placeholder="UserName" required />
                            </div>
                            <div className="w-1/2 my-4 flex justify-between">
                                <label className='text-2xl font-bold'>Password:</label>
                                <input className='w-1/2 h-12 px-2 border-2 border-gray-400 text-2xl rounded-lg' type="password" ref={passwordRef} name="password" id="password" placeholder="Password" required />
                            </div>
                        </div>
                        <Link to="/signup" className='text-blue-500 hover:text-blue-700'>Don't have an account?</Link>
                        <button type="submit" className='mt-10 bg-blue-400 w-1/2 h-12 text-2xl font-bold hover:bg-blue-500'>Login</button>
                    </form>
                </>
            )}
        </>
    )
}

export default Login;