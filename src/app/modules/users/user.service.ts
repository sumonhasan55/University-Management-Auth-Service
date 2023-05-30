
import config from "../../../config/index";
import { User } from "./user.model";
import { generateUserId } from "./user.utils";
import { IUser } from "./users.interface";

 


const createUser = async (user : IUser)=>{
	//auto generated incrimental id
	//default password
	const id =await generateUserId();
	user.id = id;

	if(!user.password){
		user.password = config.default_user_pass as string;

	}

	const  createdUser = await User.create(user);
	if(!createUser){
		throw new Error("Failed to create User");
	}
	return createdUser;
};

export default{
	createUser

}; 