const { User, Item } = require("../models");

class ItemController {
	static async create(req, res, next) {
		try {
			const data = {
				name: req.body.name,
				description: req.body.description,
				price: req.body.price,
				UserId: req.user.id,
			};

			const output = await Item.create(data);
			res.status(201).json(output);
		} catch (err) {
			next(err);
		}
	}

	static async getAll(req, res, next) {
		try {
			const output = await Item.findAll({
				include: [User],
			});
			res.status(200).json(output);
		} catch (err) {
			next(err);
		}
	}

	static async getByID(req, res, next) {
		try {
			const id = +req.params.id;
			const found = await Item.findByPk(id, {
				include: [User],
			});

			if (!found) {
				throw {
					name: `CustomError`,
					status: 404,
					message: `Not Found`,
				};
			}

			res.status(200).json(found);
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
			const found = await Item.findByPk(id);

			if (!found) {
				throw {
					name: `CustomError`,
					status: 404,
					message: `Not Found`,
				};
			}

			const output = await Item.update(data, {
				where: { id },
				returning: true,
			});
			res.status(200).json(output[1][0]);
		} catch (err) {
			next(err);
		}
	}

	static async delete(req, res) {
		try {
			const id = +req.params.id;
			const found = await Item.findByPk(id);

			if (!found) {
				throw {
					name: `CustomError`,
					status: 404,
					message: `Not Found`,
				};
			}

			await Item.destroy({
				where: { id },
			});
			res.status(200).json({ message: `Your item has been deleted` });
		} catch (err) {
			next(err);
		}
	}
}

module.exports = ItemController;
