import jwt from "jsonwebtoken";
import User from "../model/user.js";

class ToDoService {
    async createToDo(token, toDoData) {
        console.log("tododata=", toDoData)
        console.log("token type=", typeof token)
        console.log("token=", token)
        // console.log("createtodo service...")
        let userId, user;
        try {
            // const token = jwt.sign({ userId: user._id }, "this-is-my-secret-and-it-can-be-anything");
            userId = await jwt.verify(token, "this-is-my-secret-and-it-can-be-anything");
            console.log("userid=", userId)
        }
        catch (error) {
            console.log("unauthorized token...")
            return {
                status: "failed",
                data: { data: null, token: null },
                message: "invalid token"
            }
        }
        try {
            user = await User.findById(userId?.userId)
            console.log("user found, user=", user);
        }
        catch (error) {
            console.log("user not found...")
            return {
                status: "failed",
                data: { data: null, token: null },
                message: "user not found"
            }
        }
        console.log("tododata form frontend=", toDoData)
        console.log("todo=", user?.todoData?.todo);
        if (toDoData?.todoDataAxios?.type === 'todo') {
            user?.todoData?.todo?.push(toDoData?.todoDataAxios);
            console.log("todo created.......")
        }
        else if (toDoData?.todoDataAxios?.type === 'inprogress') {
            user?.todoData?.inprogress?.push(toDoData?.todoDataAxios);
            console.log("inprogress created.......")
        }
        else {
            user?.todoData?.completed?.push(toDoData?.todoDataAxios);
            console.log("completed created.......")
        }
        await user.save();
        const response = {
            status: "success",
            data: null,
            message: "todo created is tested..."
        }
        return response;
        // const { text } = req.body;
        // const userId = req.userId;

        // try {
        //     const user = await User.findById(userId);
        //     if (!user) return res.status(401).json({ error: "user not found" });

        //     user.todoData.push({ text });
        //     await user.save();
        //     return res.status(201).json({ message: 'Todo created successfully' });
        // }
        // catch (error) {
        //     return res.status(500).json({ error: 'Failed to create todo' });
        // }
    }

    async getToDoData(token) {
        console.log("getTodo service...");
        let userId, user;
        try {
            userId = await jwt.verify(token, "this-is-my-secret-and-it-can-be-anything");
            console.log("user verified, userid=", userId);
        }
        catch (error) {
            console.log("invalid token");
            const response = {
                status: "failed",
                data: { data: null, token: null },
                message: "invalid token"
            }
            return response;
        }

        try {
            user = await User.findById({ _id: userId.userId });
            console.log("user found, user=", user);
        }
        catch (error) {
            console.log("user not found");
            const response = {
                status: "failed",
                data: { data: null, token: null },
                message: "user not found"
            }
            return response;
        }

        const response = {
            status: "success",
            data: { data: user?.todoData, token: null },
            message: "sent todo data"
        }
        // const user = await User.findById(userId);
        // if (!user) {
        //     console.log("user not found....")
        //     return { status: "failed", data: null, message: "user not found" };
        // }
        // const response = user.todoData;
        return response;
    }
}

export default new ToDoService;