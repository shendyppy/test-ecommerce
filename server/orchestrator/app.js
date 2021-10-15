const express = require("express");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const PORT = 4000;
const router = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening to the PORT: ${PORT}`);
});
