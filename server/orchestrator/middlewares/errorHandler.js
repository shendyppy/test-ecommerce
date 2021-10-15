const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "CustomError":
      res.status(err.status).json({ message: err.message });
      break;
    default:
      console.log(err);
      res.status(500).json({ message: "Internal Server Error" });
      break;
  }
};

module.exports = errorHandler;
