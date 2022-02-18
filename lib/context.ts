import React, { SetStateAction } from "react";
import IUser from "../types/user";

interface IAuthContext {
	user?: IUser;
	setUser: React.Dispatch<SetStateAction<IUser>>;
}

const AuthContext = React.createContext<IAuthContext>({
	user: undefined,
	setUser: () => undefined,
});

export default AuthContext;
