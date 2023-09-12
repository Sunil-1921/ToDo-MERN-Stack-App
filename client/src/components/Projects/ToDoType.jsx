import { useSelector } from "react-redux"
import ToDo from "./ToDo"

const ToDoType = ({ toDoType, handleAdd, toDoData }) => {

    const loginStatusRedux = useSelector((state) => state.setLogin);

    return (
        // <div className="card my-3 px-2 pb-5 md:w-1/3 md:mx-2 lg:w-full xl:w-1/3 xl:mx-2 h-fit flex flex-col items-center bg-blue-50 rounded-xl border border-2 border-gray-200">
        <div className={"card my-3 px-2 pb-5 md:w-1/3 md:mx-2 lg:w-full xl:w-1/3 xl:mx-2 h-fit flex flex-col items-center rounded-xl border-2 border-gray-200 " + (toDoType === "ToDo" ? "bg-blue-50" : (toDoType === "In Progress" ? "bg-orange-50" : "bg-green-50"))}>
            <div className="card-heading py-2 text-xl font-bold">{toDoType}</div>
            <button onClick={handleAdd} className={"card-add-item-btn mb-6 text-2xl text-white w-full rounded-lg " + (toDoType === "ToDo" ? "bg-blue-500 hover:bg-blue-600" : (toDoType === "In Progress" ? "bg-orange-500 hover:bg-orange-600" : "bg-green-500 hover:bg-green-600"))}>+</button>
            {loginStatusRedux ? toDoData?.map((data) => {
                return <ToDo data={data} key={data.id} />
            }) : (<>Login required</>)}
        </div>
    )
}

export default ToDoType;