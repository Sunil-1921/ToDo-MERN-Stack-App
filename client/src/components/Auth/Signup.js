import { useRef } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Signup = () => {

    const fullnameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmpasswordRef = useRef(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (passwordRef.current.value !== confirmpasswordRef.current.value) {
            console.log("password not matched...")
            return
        }
        const userData = {
            fullname: fullnameRef.current.value,
            email: emailRef.current.value,
            username: emailRef.current.value,
            password: passwordRef.current.value,
        }
        console.log("userdata=", userData);
        try {
            const response = await axios.post("http://localhost:5000/auth/signup", userData)
            console.log("res=", response)
            fullnameRef.current.value = "";
            emailRef.current.value = "";
            passwordRef.current.value = "";
            confirmpasswordRef.current.value = "";
        }
        catch (error) {
            console.log("can't reach to server..., error=", error);
        }
    }

    return (
        <>
            <Link to="/" className='w-fit px-3 my-5 text-blue-500 absolute hover:cursor-pointer'>&lt;Back</Link>
            <form className="form flex flex-col h-full justify-center items-center" onSubmit={(event) => handleSubmit(event)}>
                <h1 className='text-3xl mb-20 font-semibold'>User Signup</h1>
                <div className=" w-full flex flex-col justify-center items-center">
                    <div className="w-1/2 my-4 flex justify-between">
                        <label className='text-2xl font-bold'>Full Name:</label>
                        <input className='w-1/2 h-12 px-2 border-2 border-gray-400 text-2xl rounded-lg' type="text" ref={fullnameRef} name="fullname" id="fullname" placeholder="Full Name" required />
                    </div>
                    <div className="w-1/2 my-4 flex justify-between">
                        <label className='text-2xl font-bold'>Email:</label>
                        <input className='w-1/2 h-12 px-2 border-2 border-gray-400 text-2xl rounded-lg' type="email" ref={emailRef} name="username" id="username" placeholder="UserName" required />
                    </div>
                    <div className="w-1/2 my-4 flex justify-between">
                        <label className='text-2xl font-bold'>Password:</label>
                        <input className='w-1/2 h-12 px-2 border-2 border-gray-400 text-2xl rounded-lg' type="password" ref={passwordRef} name="password" id="password" placeholder="Password" required />
                    </div>
                    <div className="w-1/2 my-4 flex justify-between">
                        <label className='text-2xl font-bold'>Confirm Password:</label>
                        <input className='w-1/2 h-12 px-2 border-2 border-gray-400 text-2xl rounded-lg' type="password" ref={confirmpasswordRef} name="confirmpassword" id="confirmpassword" placeholder="Confirm Password" required />
                    </div>
                </div>
                <Link to="/login" className='text-blue-500 hover:text-blue-700'>Already have an account?</Link>
                <button type="submit" className='mt-10 bg-blue-400 w-1/2 h-12 text-2xl font-bold hover:bg-blue-500'>Signup</button>
            </form>
        </>
    )
}

export default Signup;