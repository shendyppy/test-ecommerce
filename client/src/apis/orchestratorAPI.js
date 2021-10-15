import axios from "axios";

const itemAPI = axios.create({
	baseURL: "http://localhost:4001/items",
});

export default itemAPI;
