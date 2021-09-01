const app = require("./server");
const { config } = require("./config");
const db = require("./models");

const connect = require("./db/connect");

// const { seedMovies, seedMovieGenres } = require("./db/seed");

connect().then(async function onServerInit() {
  console.log(`DB connected`);

  // const { _id } = await db.Models.create({
  //   name: "Flying Microtonal Banana",
  //   price: 2000,
  //   modelDescription: "this banana will make you fly",
  //   unitsStock: 10,
  //   images: ["imageUrl"],
  // });

  // await db.Products.create({
  //   title: "Microtonal Banana",
  //   description: "The Banana from KGLW",
  //   models: [_id],
  // });

  // await db.Users.create({
  //   name: "Jimmy Hendrix",
  //   email: "j.hendrix@guiter.com",
  //   pass: "pwwd",
  //   shippingAddress: "oklahoma 4",
  //   cart: [],
  // });

  // await seedMovieGenres();
  // await seedMovies();

  app.listen(config.app.PORT, () => {
    console.log(`Server running at http://localhost:${config.app.PORT}`);
  });
});
