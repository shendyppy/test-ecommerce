import axios from "axios";

const orchestratorAPI = axios.create({
	baseURL: "http://localhost:4000/",
});

export default orchestratorAPI;
