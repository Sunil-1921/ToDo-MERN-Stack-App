import ToDoService from '../service/toDoService.js';

export const createToDoNew = async (req, res) => {
    // console.log("headers=", req.headers)
    const response = await ToDoService.createToDo(req?.headers?.authorization, req.body);
    res.status(200).send(response);
    console.log("todo created...")
}

export const getToDoData = async (req, res) => {
    const response = await ToDoService.getToDoData(req?.headers?.authorization);
    res.status(200).send(response);
    console.log("sent todo ..data...")
}