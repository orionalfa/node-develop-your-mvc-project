const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { json } = require("body-parser");

// const { errorMiddleware } = require("./middlewares");
const {
  productRouter,
  //   personRouter,
  //   movieRouter,
  //   movieGenreRouter,
  //   accountRouter,
  //   userRouter,
} = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use("/products", productRouter);
// app.use("/account", accountRouter);
// app.use("/users", userRouter);
// app.use("/genres/movie", movieGenreRouter);
// app.use("/persons", personRouter);
// app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  res.status(200).send({
    data: "hello-world",
  });
});

// app.use(errorMiddleware);

module.exports = app;
