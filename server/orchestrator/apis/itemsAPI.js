const axios = require("axios");

const itemsAPI = axios.create({
	baseURL: "http://localhost:4001/items",
});

module.exports = itemsAPI;
