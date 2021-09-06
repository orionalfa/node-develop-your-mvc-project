const app = require("./server");
const { config } = require("./config");
const db = require("./models");

const connect = require("./db/connect");

// const { seedMovies, seedMovieGenres } = require("./db/seed");

connect().then(async function onServerInit() {
  console.log(`DB connected`);

  const { _id } = await db.Models.create({
    name: "Flying Microtonal Banana",
    price: 2000,
    modelDescription: "this banana will make you fly",
    unitsStock: 10,
    images: [
      "https://cdna.artstation.com/p/assets/video_clips/images/025/166/784/large/marius-k-thumb.jpg?1584876869",
    ],
  });

  await db.Products.create({
    title: "Microtonal Banana",
    description: "The Banana from KGLW",
    models: [_id],
  });

  // _id = await db.Models.create({
  //   name: "Fender Stratocaster",
  //   price: 2000,
  //   modelDescription: "this banana will make you fly",
  //   unitsStock: 10,
  //   images: [
  //     "https://thumbs.static-thomann.de/thumb//thumb580x/pics/cms/image/guide/es/online_guide_e_guitars/fender_stratocaster.jpg",
  //   ],
  // });

  // await db.Products.create({
  //   title: "Microtonal Banana",
  //   description: "The Banana from KGLW",
  //   models: [_id],
  // });

  // sample = {
  //   name: "Jimmyyyyyyy Hendrix",
  //   email: "j.hendrix@guiter.com",
  //   pass: "pwwd",
  //   shippingAddress: {
  //     country: "USA",
  //     city: "NY",
  //     postalCode: "10999",
  //     streetAddress: "5 Ocean av",
  //     contactName: "Jim Morrison",
  //     contactPhone: "175555666",
  //   },
  //   role: "customer",
  //   cart: [],
  // };

  // const { _id } = await db.Users.create(sample);

  // await seedMovieGenres();
  // await seedMovies();

  app.listen(config.app.PORT, () => {
    console.log(`Server running at http://localhost:${config.app.PORT}`);
  });
});
