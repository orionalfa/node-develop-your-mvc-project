const db = require("../models");
// const { encryptString } = require("../utils/encrypt");
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

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
};
