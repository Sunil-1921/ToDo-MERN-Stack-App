import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDoType from './ToDoType';
import AddToDoForm from "./AddToDoForm";
import axios from "axios";
import Cookies from "js-cookie";
import { setTodo, setInProgress, setCompleted, setLogin } from "../../actions";
import { Link } from 'react-router-dom'

const Projects = () => {
    const [showForm, setShowForm] = useState(false);
    const [toDoType, setToDoType] = useState({ todo: true, inProgress: false, completed: false });

    const toDo = useSelector(state => state.toDo);
    const loginStatusRedux = useSelector((state) => state.setLogin);
    console.log("todo data=", toDo)
    const toDoInProgress = useSelector(state => state.toDoInProgress)
    const toDoCompleted = useSelector(state => state.toDoCompleted)

    const dispatch = useDispatch();

    const handleAddToDo = () => {
        setShowForm(!showForm);
        setToDoType({ todo: true, inProgress: false, completed: false });
    }
    const handleAddInProgress = () => {
        setShowForm(!showForm);
        setToDoType({ todo: false, inProgress: true, completed: false });
    }
    const handleAddCompleted = () => {
        setShowForm(!showForm);
        setToDoType({ todo: false, inProgress: false, completed: true });
    }

    const fetchData = async () => {
        const token = Cookies.get("jwtoken");
        if (token) {
            dispatch(setLogin(true))
        }
        else {
            dispatch(setLogin(false))
        }
        try {
            const response = await axios.get("http://localhost:5000/todo/gettododata", {
                headers: {
                    Authorization: token
                }
            })
            console.log("todo response=", response?.data?.data?.data);
            const { todo, inprogress, completed } = response?.data?.data?.data;
            console.log("todo new data=", todo)
            console.log("todo new data type=", typeof todo)
            dispatch(setTodo(todo))
            dispatch(setInProgress(inprogress))
            dispatch(setCompleted(completed))
        }
        catch (error) {
            console.log("can't get data from server");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            {loginStatusRedux ? (
                <section className="lg:pr-5 xl:px-5 overflow-y-auto">
                    {showForm ? <AddToDoForm showForm={showForm} setShowForm={setShowForm} toDoType={toDoType} /> : <></>}
                    <div className="project-heading my-6 text-3xl text-center">Projects</div>
                    <div className="project-cards px-2 md:flex lg:block xl:flex">
                        <ToDoType toDoType="ToDo" handleAdd={handleAddToDo} toDoData={toDo} />
                        <ToDoType toDoType="In Progress" handleAdd={handleAddInProgress} toDoData={toDoInProgress} />
                        <ToDoType toDoType="Completed" handleAdd={handleAddCompleted} toDoData={toDoCompleted} />
                    </div>
                </section>
            ) : (
                <Link to="/login" className="h-full text-3xl cursor-pointer flex items-center justify-center">Login required</Link>
            )}
        </>
    )
}

export default Projects;