const { checkPassword } = require("../helpers/bcrypt");
const { signToken, verifyToken } = require("../helpers/jwt");
const { User } = require("../models");

class UserController {
  static async getToken(req, res, next) {
    try {
      const { access_token } = req.headers;
      const payload = verifyToken(access_token);

      const { id, email, role } = payload;

      res.status(200).json({ id, email, role });
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

      const output = await User.create(data);
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
      const found = await User.findOne({
        where: {
          email: data.email,
        },
      });
      if (!found) {
        throw {
          name: `CustomError`,
          status: 401,
          message: `Wrong Input For Your Email/Password`,
        };
      }

      const verified = checkPassword(data.password, found.password);

      if (!verified) {
        throw {
          name: `CustomError`,
          status: 401,
          message: `Wrong Input For Your Email/Password`,
        };
      }

      const access_token = signToken({
        id: found.id,
        email: found.email,
        role: found.role,
      });
      res.status(200).json({ access_token });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
