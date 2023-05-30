import express, { Application, Request, Response } from "express";
import cors from "cors";
import userService from "./app/modules/users/user.service";
import userRouter from "./app/modules/users/user.route";
const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use("/api/v1/users/", userRouter);


app.get("/", async(req:Request, res:Response) => {
	await userService.createUser({
		id:"999",
		password:"12345",
		role:"student"
	});
	res.send("Hello Working are Successfully!");
});

export default app;