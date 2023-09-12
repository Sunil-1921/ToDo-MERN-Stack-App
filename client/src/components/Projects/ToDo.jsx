// import { useState } from "react";

const ToDo = ({ data }) => {
    // const [moreOption, setMoreOption] = useState(false);
    return (
        <div className="card-items w-full">
            <div className="item w-full bg-white mb-2 px-2 pb-3 rounded-xl border border-1 border-gray-300">
                <div className="item-heading my-3 text-lg font-bold flex justify-between">
                    <div className="item-title">{data.heading}</div>
                    <i className="fa-solid fa-angle-down flex items-center cursor-pointer"></i>
                </div>
                <div className="item-description text-sm">{data.description}</div>
            </div>
        </div>
    )
}

export default ToDo;