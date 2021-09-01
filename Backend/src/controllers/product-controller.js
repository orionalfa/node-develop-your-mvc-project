const db = require("../models");
// const { encryptString } = require("../utils/encrypt");
const { generateResponse } = require("../utils/generate-response");

async function getAllProducts(req, res, next) {
  try {
    const dbResponse = await db.Products.find().populate("models");

    if (dbResponse.error) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse,
      }),
    );
  } catch (error) {
    next(error);
  }
}

async function getProductById(req, res, next) {
  const { id: productId } = req.params;

  try {
    const dbResponse = await db.Products.findById(productId);

    if (dbResponse.error) {
      res.status(400).send(
        generateResponse({
          error: dbResponse.error,
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse,
      }),
    );
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllProducts: getAllProducts,
  getProductById: getProductById,
};
