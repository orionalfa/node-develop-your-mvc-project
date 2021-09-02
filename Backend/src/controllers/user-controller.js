const db = require("../models");
const { encryptString } = require("../utils/encrypt");
const { generateResponse } = require("../utils/generate-response");

async function getAllUsers(req, res, next) {
  try {
    const dbResponse = await db.Users.find();

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

async function getUserById(req, res, next) {
  const { id: userId } = req.params;

  try {
    const dbResponse = await db.Users.findById(userId);

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
async function createUser(req, res, next) {
  // console.log(req.body);

  var { pass, ...rest } = req.body;
  pass = await encryptString(pass);

  try {
    const dbResponse = await db.Users.create({ pass, ...rest });
    if (!dbResponse._id) {
      res.status(400).send(
        generateResponse({
          error: "not created",
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: _id,
      }),
    );
  } catch (error) {
    if (error.keyValue) {
      res.status(500).send(
        generateResponse({
          data: error.keyValue,
          error: "name or email already exists",
        }),
      );
    }
    next(error);
  }
}

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  createUser: createUser,
};
