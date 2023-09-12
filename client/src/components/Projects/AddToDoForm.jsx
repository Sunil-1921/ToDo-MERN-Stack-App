import { useRef } from 'react';
import { useDispatch } from "react-redux";
import { addToDo, addInProgress, addCompleted } from "../../actions";
import axios from "axios";
import Cookies from 'js-cookie';

const AddToDoForm = ({ showForm, setShowForm, toDoType, inProgressType, completedType }) => {
    const dispatch = useDispatch();

    const headingRef = useRef(null);
    const descriptionRef = useRef(null);
    const typeRef = useRef(null);

    const handleClick = async (e) => {
        e.preventDefault();
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGMzZjkxZjAxMWZjZDk3ZGQ2NThmZmIiLCJpYXQiOjE2OTA1NjUzMjZ9.8aOv3QAmnotM8EYcP0pwp5UZrrClY-PAhO07oiuldUk"
        const heading = headingRef.current.value;
        const description = descriptionRef.current.value;
        const type = typeRef.current.value;
        const todoDataAxios = {
            heading: heading,
            description: description,
            type: type,
        }
        console.log("ref data=", todoDataAxios)

        // token for fullname: sunil, username: sunil.sirvi1921@gmail.com, and password: 123 or 1234
        // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NGMzZjkxZjAxMWZjZDk3ZGQ2NThmZmIiLCJpYXQiOjE2OTA1NjUzMjZ9.8aOv3QAmnotM8EYcP0pwp5UZrrClY-PAhO07oiuldUk"
        // const response = await axios.post("http://localhost:5000/todo/create", token)
        // console.log("response for creating todo=", response)

        const token = Cookies.get("jwtoken");
        console.log("add todo, token=", token)
        const response = await axios.post("http://localhost:5000/todo/create", { todoDataAxios }, {
            headers: {
                Authorization: token,
            },
        })
        console.log("response for creating todo=", response)

        if (type === 'todo') dispatch(addToDo({ heading: heading, description: description }));
        else if (type === 'inprogress') dispatch(addInProgress({ heading: heading, description: description }));
        else if (type === 'completed') dispatch(addCompleted({ heading: heading, description: description }));
        else console.log("no action found")
        headingRef.current.value = ''
        descriptionRef.current.value = ''
        setShowForm(!showForm);
    }

    return (
        <div className="absolute w-full lg:w-3/5 p-8 p-2 sm:p-16 pt-44">
            <form action="" onSubmit={handleClick} className="flex justify-center items-center px-8 lg:px-16 pb-12 flex-col bg-white rounded-lg shadow-2xl border-[1px] border-slate-400">
                <div className="w-full h-20 flex justify-end items-center py-4">
                    <p className="p-1 transition-all duration-100 text-2xl cursor-pointer hover:text-3xl" onClick={() => setShowForm(!showForm)}>X</p>
                </div>
                <select name="type" ref={typeRef} className="h-10 text-lg w-64 xsm:w-5/6 px-2 my-2 bg-white cursor-pointer outline-2 outline outline-slate-300 rounded-md" id="cars">
                    <option value="todo" selected={toDoType.todo}>ToDo</option>
                    <option value="inprogress" selected={toDoType.inProgress}>In Progress</option>
                    <option value="completed" selected={toDoType.completed}>Completed</option>
                </select>
                <input className="h-10 text-lg w-64 xsm:w-5/6 px-2 my-2 outline-2 outline outline-slate-300 rounded-md" ref={headingRef} name="heading" type="text" placeholder="Heading" required />
                <input className="h-10 text-lg w-64 xsm:w-5/6 px-2 my-2 outline-2 outline outline-slate-300 rounded-md" ref={descriptionRef} name="description" type="text" placeholder="Description" required />
                <button type="submit" className="bg-green-500 hover:bg-green-600 text-white my-2 h-10 text-lg w-64 xsm:w-5/6 cursor-pointer rounded-md">Add</button>
            </form>
        </div>
    )
}

export default AddToDoForm;