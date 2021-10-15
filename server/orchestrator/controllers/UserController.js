const { usersAPI } = require("../apis/usersAPI");
const { checkPassword } = require("../helpers/bcrypt");
const { signToken } = require("../helpers/jwt");

class UserController {
	static async getToken(req, res, next) {
		try {
			const response = await usersAPI.get("/user");

			res.status(200).json(response.data);
		} catch (err) {
			next(err);
		}
	}
	static async register(req, res, next) {
		try {
			const data = {
				email: req.body.email,
				password: req.body.password,
				role: "admin",
			};

			const output = await usersAPI.post("/register", data);
			res.status(201).json({
				id: output.id,
				email: output.email,
			});
		} catch (err) {
			next(err);
		}
	}
	static async login(req, res, next) {
		try {
			const data = {
				email: req.body.email,
				password: req.body.password,
			};

			const output = await usersAPI.post("/login", data);

			const verified = checkPassword(data.password, output.password);

			if (!verified) {
				throw {
					name: `CustomError`,
					status: 401,
					message: `Wrong Input For Your Email/Password`,
				};
			}

			const access_token = signToken({
				id: output.id,
				email: output.email,
				role: output.role,
			});
			res.status(200).json({ access_token });
		} catch (err) {
			next(err);
		}
	}
}

module.exports = UserController;
