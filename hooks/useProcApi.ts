import { ApiResponse } from "apisauce";
import apiClient from "../lib/apiClient";

export interface LoginDto {
	success: boolean;
	jwt?: string;
	message?: string;
}

const login = async (
	email: string,
	password: string
): Promise<ApiResponse<LoginDto>> => {
	return await apiClient.post("/api/auth", { email, password });
};

export default {
	login,
};
