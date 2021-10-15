"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
	class Item extends Model {
		static associate(models) {
			Item.belongsTo(models.User, {
				foreignKey: "UserId",
			});
		}
	}
	Item.init(
		{
			name: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: {
						msg: `Name is required`,
					},
				},
			},
			price: {
				type: DataTypes.INTEGER,
				validate: {
					notEmpty: {
						msg: `Price is required`,
					},
					isInt: {
						msg: `Price should be a number input`,
					},
					min: {
						args: [0],
						msg: `Price could not be zero`,
					},
				},
			},
			description: {
				type: DataTypes.TEXT,
				validate: {
					notEmpty: {
						msg: `Description is required`,
					},
				},
			},
			UserId: DataTypes.INTEGER,
		},
		{
			sequelize,
			modelName: "Item",
		}
	);
	return Item;
};
