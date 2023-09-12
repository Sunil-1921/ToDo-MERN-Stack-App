import User from '../model/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class AuthService {
    async signup(newUserData) {
        const { username, email, password, fullname } = newUserData;
        console.log(email, password, fullname);
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({ username, email, fullname, password: hashedPassword });
        const response = {
            status: "success",
            data: { data: newUser, token: null },
            message: "signup successful"
        }
        return response;
    }

    async login(userData) {
        const { username, password } = userData;
        let response;
        try {

            const user = await User.findOne({ username });
            if (!user) return response = { status: "failed", data: { data: null, token: null }, message: "invalid username" };

            const isPasswordMatched = await bcrypt.compare(password, user.password);
            if (!isPasswordMatched) return response = { status: "failed", data: { data: null, token: null }, message: "invalid password" };


            const token = jwt.sign({ userId: user._id }, "this-is-my-secret-and-it-can-be-anything", { expiresIn: 120000 });
            return response = {
                status: "success",
                data: { data: { email: user?.email, fullname: user?.fullname }, token: token },
                message: "logged successfully"
            };
        }
        catch (error) {
            console.log("error while login...")
            return response = {
                status: "falied",
                data: { data: null, token: token },
                message: "failed to login"
            };
        }
    }
}

export default new AuthService();