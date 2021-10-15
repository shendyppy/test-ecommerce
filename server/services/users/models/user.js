"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		static associate(models) {
			User.hasMany(models.Items, {
				foreignKey: "UserId",
			});
		}
	}
	User.init(
		{
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validate: {
					notEmpty: {
						msg: `Email is required`,
					},
					notNull: {
						msg: `Email is required`,
					},
					isEmail: {
						msg: `This field should be an Email input`,
					},
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
				validate: {
					notEmpty: {
						msg: `Password is required`,
					},
					notNull: {
						msg: `Password is required`,
					},
					len: {
						min: [5],
						msg: `Password should be more than 5 characters`,
					},
				},
			},
			role: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: "User",
			hooks: {
				beforeCreate: (instance, options) => {
					const hashingPassword = hashPassword(instance.password);
					instance.password = hashingPassword;
				},
			},
		}
	);
	return User;
};
