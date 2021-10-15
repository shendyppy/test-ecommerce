import axios from "axios";

const userAPI = axios.create({
	baseURL: "http://localhost:4002/users",
});

export default userAPI;
