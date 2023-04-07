import express from "express";
import * as dotenv from 'dotenv';
import { DbConn } from "./component/databaseConnection.js";
import cors from 'cors';
import bodyParser from "body-parser";
import passport from 'passport';
import passportConfig from './config/passport.js';
import router from './index.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
passportConfig(passport);
await DbConn();
app.get(
    "/", (req, res) => {
        res.send({reso:'hello! server is ready!'});
    }
);

app.use('/', router);

app.listen(
    PORT, () => {
        console.log("Server listen at : http://localhost:4000/ ");
    }
)
