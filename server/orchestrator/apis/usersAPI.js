const axios = require("axios");

const usersAPI = axios.create({
	baseURL: "http://localhost:4002/",
});

module.exports = usersAPI;
