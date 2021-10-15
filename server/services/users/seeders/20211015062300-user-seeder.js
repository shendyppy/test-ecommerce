"use strict";

const { hashPassword } = require("../helpers/bcrypt");

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Users",
			[
				{
					email: `admin@mail.com`,
					password: hashPassword(`admin`),
					role: `admin`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					email: `staff@mail.com`,
					password: hashPassword(`staff`),
					role: `staff`,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Users", null, {});
	},
};
