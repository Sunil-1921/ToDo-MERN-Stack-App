import mongoose, { mongo } from 'mongoose';

const toDoSchema = new mongoose.Schema({
    type: String,
    heading: String,
    description: String,
})

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    todoData: {
        todo: [toDoSchema],
        inprogress: [toDoSchema],
        completed: [toDoSchema]
    }
})

const User = mongoose.model('testingusers', userSchema);

export default User;