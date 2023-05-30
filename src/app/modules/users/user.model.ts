import { Model, Schema, model } from "mongoose";
import { IUser } from "./users.interface";

type UserModel = Model<IUser,object>
export const userSchema = new Schema<IUser>
({id:{type:String,
	require:true,
	unique:true
},
password:{
	type:String,
	require:true
},
role:{
	type:String,
	require:true
},


},
{
	timestamps:true
}
);
export const User = model<IUser,UserModel>("User",userSchema);

