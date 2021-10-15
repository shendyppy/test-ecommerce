"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.bulkInsert(
			"Items",
			[
				{
					name: `Chino`,
					price: 1000000,
					description: `Tahan Api`,
					UserId: 1,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
				{
					name: `Jeans`,
					price: 1200000,
					description: `Tahan Air`,
					UserId: 2,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{}
		);
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete("Items", null, {});
	},
};
