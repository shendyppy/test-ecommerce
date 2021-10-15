const { User, Product, Category } = require("../models");

class ProductController {
  static async create(req, res, next) {
    try {
      const data = {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        imgUrl: req.body.imageUrl,
        CategoryId: req.body.CategoryId,
        AuthorId: req.user.id,
      };

      const output = await Product.create(data);
      res.status(201).json(output);
    } catch (err) {
      next(err);
    }
  }

  static async getAll(req, res, next) {
    try {
      const output = await Product.findAll({
        include: [Category, User],
      });
      res.status(200).json(output);
    } catch (err) {
      next(err);
    }
  }

  static async getByID(req, res, next) {
    try {
      const id = +req.params.id;
      const found = await Product.findByPk(id, {
        include: [Category, User],
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
        imgUrl: req.body.imageUrl,
        CategoryId: req.body.CategoryId,
        AuthorId: req.body.AuthorId,
      };
      const found = await Product.findByPk(id);

      if (!found) {
        throw {
          name: `CustomError`,
          status: 404,
          message: `Not Found`,
        };
      }

      const output = await Product.update(data, {
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
      const found = await Product.findByPk(id);

      if (!found) {
        throw {
          name: `CustomError`,
          status: 404,
          message: `Not Found`,
        };
      }

      await Product.destroy({
        where: { id },
      });
      res.status(200).json({ message: `Your product has been deleted` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = ProductController;
