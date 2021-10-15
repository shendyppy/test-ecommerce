const { itemsAPI } = require("../apis/itemsAPI");

class ItemController {
	static async create(req, res, next) {
		try {
			const data = {
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				UserId: req.user.id,
			};

			const output = await itemsAPI.post("/", data);
			res.status(201).json(output);
		} catch (err) {
			next(err);
		}
	}

	static async getAll(req, res, next) {
		try {
			const output = await itemsAPI.get("/");
			console.log(output);

			res.status(200).json(output.data);
		} catch (err) {
			console.log(err);
			next(err);
		}
	}

	static async getByID(req, res, next) {
		try {
			const id = +req.params.id;
			const output = await itemsAPI.get(`/${id}`);

			if (!output) {
				throw {
					name: `CustomError`,
					status: 404,
					message: `Not Found`,
				};
			}

			res.status(200).json(output);
		} catch (err) {
			next(err);
		}
	}

	static async update(req, res) {
		try {
			const id = +req.params.id;
			const data = {
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				UserId: req.body.UserId,
			};
			const output = await itemsAPI.put(`/${id}`, data);

			if (!output) {
				throw {
					name: `CustomError`,
					status: 404,
					message: `Not Found`,
				};
			}

			res.status(200).json(output);
		} catch (err) {
			next(err);
		}
	}

	static async delete(req, res) {
		try {
			const id = +req.params.id;
			const output = await itemsAPI.delete(`/${id}`);

			if (!output) {
				throw {
					name: `CustomError`,
					status: 404,
					message: `Not Found`,
				};
			}

			res.status(200).json({ message: `Your item has been deleted` });
		} catch (err) {
			next(err);
		}
	}
}

module.exports = ItemController;
