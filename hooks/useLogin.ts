import { useContext } from "react";
import AuthContext from "../lib/context";

interface IuseLogin {
	login: (authToken: string) => void;
	logout: () => void;
}

const useLogin = (): {
	login: (authToken: string) => void;
	logout: () => void;
} => {
	const { user, setUser } = useContext(AuthContext);

	const login = (authToken: string) => {
		setUser({ token: authToken });
	};

	const logout = () => {
		setUser({ token: undefined });
	};

	return { login, logout };
};

export default useLogin;
