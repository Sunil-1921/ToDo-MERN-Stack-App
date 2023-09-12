import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../actions';
import featureImg from '../../assets/featureAndHighlighs.svg'
import whyChooseImg from '../../assets/whyChooseTodoHub.svg'

const Home = () => {
    const loginStatus = useSelector((state) => state.setLogin)
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
            <section className="px-5 py-16 h-screen overflow-y-auto">
                <div className="home-heading text-center">
                    <h1 className="text-3xl pb-2 font-semibold">Welcome to <span className="text-sky-500">T</span>odo<span className="text-sky-500">H</span>ub</h1>

                    <p className="mb-10">Your Ultimate Task Management Solution</p>
                    {/* <p className="">This website created by Sunil Sirvi</p> */}
                    {!loginStatus && <Link to="/login" className='px-5 py-1 border-b-2 border-blue-300 hover:border-blue-500 hover:text-blue-600 transition duration-300 rounded-md '>get started</Link>}
                </div>
                <hr className="my-10" />
                <div className="home-features mb-20 px-16 py-10 border-2 border-gray-100 rounded-3xl duration-200 hover:-translate-y-1 hover:shadow-xl">
                    <h2 className="text-2xl mb-8 text-center">Features and Highlights:</h2>
                    <div className='flex flex-col items-center lg:flex-row lg:justify-between'>
                        <ul className="w-2/3">
                            <li className='list-disc'><span className="font-bold">Effortless Task Organization:</span> TodoHub helps you stay on top of your tasks with a simple and intuitive interface. Easily add, update, and manage your to-dos in real-time.</li><br />
                            <li className='list-disc'><span className="font-bold">Categorize Your Tasks:</span> Seamlessly organize your tasks into three distinct categories: ToDo, In Progress, and Completed. Stay focused and in control of your workflow like never before.</li><br />
                            <li className='list-disc'><span className="font-bold">Stay Ahead with Prioritization:</span> Rank your tasks based on priority, ensuring you never miss a deadline and always accomplish what truly matters.</li><br />
                            <li className='list-disc'><span className="font-bold">Personalized Profile:</span> Customize your profile with essential information, making TodoHub uniquely yours.</li><br />
                            <li className='list-disc'><span className="font-bold">Seamless User Authentication:</span> Quickly and securely access your tasks with our hassle-free sign-in and sign-out process.</li><br />
                            {/* <li><span className="font-bold">6. Seamless User Authentication:</span> Quickly and securely access your tasks with our hassle-free sign-in and sign-out process.</li><br />
                        <li><span className="font-bold">7. Seamless User Authentication:</span> Quickly and securely access your tasks with our hassle-free sign-in and sign-out process.</li><br />
                        <li><span className="font-bold">8. Seamless User Authentication:</span> Quickly and securely access your tasks with our hassle-free sign-in and sign-out process.</li> */}
                        </ul>
                        <img src={featureImg} className='w-96 pl-10' alt="" />
                    </div>
                </div>
                <div className="home-why-todohub px-16 py-10 border-2 border-gray-100 rounded-3xl duration-200 hover:-translate-y-1 hover:shadow-xl">
                    <h2 className="text-2xl mb-8 text-center">Why Choose TodoHub?</h2>
                    <div className='flex flex-col items-center lg:flex-row lg:justify-between'>
                        <img src={whyChooseImg} className='w-96 pr-10' alt="" />
                        <ul className='w-2/3'>
                            <li className='list-disc'> TodoHub streamlines your task management process, giving you more time to focus on what truly matters.</li><br />
                            <li className='list-disc'> Enjoy a clutter-free interface that enhances your productivity and keeps you organized.</li><br />
                            <li className='list-disc'> Embrace a user-centric experience, crafted to simplify your task management journey.</li><br />
                            <li className='list-disc'> Say goodbye to missed deadlines and incomplete projects, thanks to TodoHub's seamless organization.</li><br />
                            <li className='list-disc'> Experience the joy of completing tasks efficiently and witnessing your progress in real-time.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;