import authService from '../service/authService.js';

export const signup = async (req, res) => {
    const response = await authService.signup(req.body);
    res.status(200).send(response);
    console.log("user created...")
}

export const login = async (req, res) => {
    const response = await authService.login(req.body);
    const token = response.data.token;
    console.log("token=", token);
    if (token) {
        console.log("if")
        res.cookie("jwtoken", token, { maxAge: 120000 })
    }
    res.status(200).send(response);
    console.log("logged in successfully...")
}