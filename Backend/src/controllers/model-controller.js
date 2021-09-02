const db = require("../models");

const { generateResponse } = require("../utils/generate-response");

// async function getAllModels(req, res, next) {
//   try {
//     const dbResponse = await db.Products.find().populate("models");

//     // if (dbResponse.error) {
//     //   res.status(400).send(
//     //     generateResponse({
//     //       error: dbResponse.error,
//     //     }),
//     //   );
//     // }

//     res.status(200).send(
//       generateResponse({
//         data: dbResponse,
//       }),
//     );
//   } catch (error) {
//     res.status(500).send(
//       generateResponse({
//         error: error,
//       }),
//     );
//     next(error);
//   }
// }

// async function getProductById(req, res, next) {
//   const { id: productId } = req.params;

//   try {
//     const dbResponse = await db.Products.findById(productId).populate("models");

//     res.status(200).send(
//       generateResponse({
//         data: dbResponse,
//       }),
//     );
//   } catch (error) {
//     res.status(500).send(
//       generateResponse({
//         error: error,
//       }),
//     );
//     next(error);
//   }
// }

// async function addNewProduct(req, res, next) {
//   const productBody = req.body;

//   try {
//     modelsId = await Promise.all(
//       productBody.models.map(async (model) => {
//         const { _id } = await db.Models.create(model);
//         return _id;
//       }),
//     );

//     const { _id: productId } = await db.Products.create({
//       title: productBody.title,
//       description: productBody.description,
//       models: modelsId,
//     });

//     res.status(200).send(
//       generateResponse({
//         data: {
//           message: "Product added correctly",
//           productId: productId,
//         },
//       }),
//     );
//   } catch (error) {
//     res.status(500).send(
//       generateResponse({
//         error: error,
//       }),
//     );
//     next(error);
//   }
// }

// async function updateProduct(req, res, next) {
//   const { id: productId } = req.params;
//   const productBody = req.body;

//   try {
//     const productDoc = await db.Products.findOne({ _id: productId });

//     const productToSave = { ...productDoc._doc, ...productBody };

//     productDoc.set(productToSave);

//     await productDoc.save();

//     res.status(200).send(
//       generateResponse({
//         data: {
//           message: "Product updated correctly",
//           productId: productId,
//         },
//       }),
//     );
//   } catch (error) {
//     res.status(500).send(
//       generateResponse({
//         error: error,
//       }),
//     );
//     next(error);
//   }
// }

// async function deleteProduct(req, res, next) {
//   const { id: productId } = req.params;

//   try {
//     const productDoc = await db.Products.findOne({ _id: productId });

//     productDoc.models.forEach(async (modelId) => {
//       await db.Models.deleteOne({ _id: modelId });
//     });

//     await db.Products.deleteOne({ _id: productId });

//     res.status(200).send(
//       generateResponse({
//         data: {
//           message: "Product eliminated correctly",
//           productId: productId,
//         },
//       }),
//     );
//   } catch (error) {
//     res.status(500).send(
//       generateResponse({
//         error: error,
//       }),
//     );
//     next(error);
//   }
// }

module.exports = {
  // getAllProducts: getAllProducts,
  // getProductById: getProductById,
  // addNewProduct: addNewProduct,
  // updateProduct: updateProduct,
  // deleteProduct: deleteProduct,
};
