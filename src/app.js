import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true // read about it  ?
}));

app.use( express.json({ limit: "16kb" }));
app.use( express.urlencoded({ extended: true, limit: "16kb" }));
app.use( express.static("public")); // public assets, to stores files, ...etc.
app.use( cookieParser());

//routes import
import userRouter from './routes/user.routes.js';
import playlistRouter from './routes/playlist.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/playlist", playlistRouter);
app.use("/api/v1/subscription", subscriptionRouter);

export { app }; 

// DRY:- Dont Repeat Yourself
// WET:- Write Every Time