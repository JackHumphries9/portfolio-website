import { create } from "apisauce";

const apiClient = create({
	baseURL: process.env.URL,
});

export default apiClient;
