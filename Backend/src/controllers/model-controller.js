const db = require("../models");

const { generateResponse } = require("../utils/generate-response");

async function getAllModels(req, res, next) {
  try {
    const dbResponse = await db.Models.find();

    res.status(200).send(
      generateResponse({
        data: dbResponse,
      }),
    );
  } catch (error) {
    res.status(500).send(
      generateResponse({
        error: error,
      }),
    );
    next(error);
  }
}

async function getModelById(req, res, next) {
  const { id: modelId } = req.params;

  try {
    const dbResponse = await db.Models.findById(modelId);

    res.status(200).send(
      generateResponse({
        data: dbResponse,
      }),
    );
  } catch (error) {
    res.status(500).send(
      generateResponse({
        error: error,
      }),
    );
    next(error);
  }
}

async function addNewModel(req, res, next) {
  const { id: productId } = req.params;
  const modelBody = req.body;

  try {
    const { _id } = await db.Models.create(modelBody);

    const productDoc = await db.Products.findById(productId);

    productDoc.models.push(_id);

    productDoc.save();

    res.status(200).send(
      generateResponse({
        data: {
          message: "Model added correctly and related with the product",
          productId: productId,
          modelId: _id,
        },
      }),
    );
  } catch (error) {
    res.status(500).send(
      generateResponse({
        error: error,
      }),
    );
    next(error);
  }
}

async function updateModel(req, res, next) {
  const { id: modelId } = req.params;
  const modelBody = req.body;

  try {
    const { _id: productId } = await db.Products.findOne({ models: modelId });

    const modelDoc = await db.Models.findOne({ _id: modelId });

    const modelToSave = { ...modelDoc._doc, ...modelBody };

    modelDoc.set(modelToSave);

    await modelDoc.save();

    res.status(200).send(
      generateResponse({
        data: {
          message: "Model updated correctly",
          productId: productId,
          modelId: modelId,
        },
      }),
    );
  } catch (error) {
    res.status(500).send(
      generateResponse({
        error: error,
      }),
    );
    next(error);
  }
}

async function deleteModel(req, res, next) {
  const { id: modelId } = req.params;

  try {
    const productDoc = await db.Products.findOne({ models: modelId });

    await db.Models.deleteOne({ _id: modelId });

    productDoc.models = productDoc.models.filter((model) => model != modelId);

    productDoc.save();

    res.status(200).send(
      generateResponse({
        data: {
          message: "Model eliminated correctly",
          productId: productDoc._id,
          modelId: modelId,
        },
      }),
    );
  } catch (error) {
    res.status(500).send(
      generateResponse({
        error: error,
      }),
    );
    next(error);
  }
}

module.exports = {
  getAllModels: getAllModels,
  getModelById: getModelById,
  addNewModel: addNewModel,
  updateModel: updateModel,
  deleteModel: deleteModel,
};
