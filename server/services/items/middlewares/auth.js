const { verifyToken } = require("../helpers/jwt.js");
const { User, Product } = require("../models");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    const payload = verifyToken(access_token);

    if (!payload) {
      throw {
        name: `CustomError`,
        status: 401,
        message: `Token is Invalid`,
      };
    }

    const { id, email, role } = payload;
    const found = await User.findByPk(id);

    if (!found) {
      throw {
        name: `CustomError`,
        status: 401,
        message: `Token is Invalid`,
      };
    }

    req.user = { id, email, role };
    next();
  } catch (err) {
    next(err);
  }
}

async function authorization(req, res, next) {
  try {
    const id = req.params.id;
    const UserId = req.user.id;
    const UserRole = req.user.role;
    const foundProduct = await Product.findByPk(id);

    if (foundProduct) {
      if (foundProduct.AuthorId === UserId || UserRole === "admin") {
        next();
      } else {
        throw {
          name: `CustomError`,
          status: 403,
          message: `Forbidden Error`,
        };
      }
    } else {
      throw {
        name: `CustomError`,
        status: 404,
        message: `Not Found`,
      };
    }
  } catch (err) {
    next(err);
  }
}

module.exports = {
  authentication,
  authorization,
};
