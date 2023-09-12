import express from 'express';
import cors from 'cors'
import bodyParser from 'body-parser'
import connect from './src/db/connection.js';
import authRoute from './src/routes/authRoute.js';
import toDoRoute from './src/routes/toDoRoute.js';

const app = express();
const PORT = 5000;

// middleware
// app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json({ limit: "5mb" }))
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }))
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

connect();

app.get("/", (req, res) => res.send("<h1>this is home page</h1>"))
app.use("/auth", authRoute);
app.use("/todo", toDoRoute);


app.listen(PORT, () => console.log(`server is runing on port ${PORT}...`))