import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    // console.log("req=", req)
    // console.log("reqheader=", req.header)
    // const token = req.header('Authorization')?.replace('Bearer', '');
    const token = req.header('Authorization')?.replace('Bearer ', '');
    console.log("token=", token)
    // if (!token) return res.status(401).json({ error: "unauthorized" });
    if (!token) {
        console.log("inside if..");
    }
    try {
        const decoded = jwt.verify(token, "this-is-my-secret-and-it-can-be-anything");
        req.userId = decoded.userId;
        console.log("authMiddleware...")
        next();
    }
    catch (error) {
        // return res.status(401).send({ status: "catch, failed", data: null, message: "failed" });
        console.log("not working...");
        return res.status(200).send({ status: "catch, failed", data: null, message: "failed" });
    }
}