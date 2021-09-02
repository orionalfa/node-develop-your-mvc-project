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
        data: dbResponse._id,
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

async function deleteUser(req, res, next) {
  try {
    const dbResponse = await db.Users.findByIdAndDelete(req.params.id);
    if (dbResponse) {
      res.status(200).send(
        generateResponse({
          data: dbResponse,
        }),
      );
    } else {
      res.status(400).send(
        generateResponse({
          data: null,
          error: "User ID doesn't exist",
        }),
      );
    }
  } catch (error) {
    res.status(500).send(
      generateResponse({
        data: req.params.id,
        error: "not a User ID",
      }),
    );

    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    var { pass, ...bodyReq } = req.body;
    if (pass) {
      pass = await encryptString(pass);
      bodyReq = { ...bodyReq, pass };
    }
    const dbResponse = await db.Users.findByIdAndUpdate(
      req.params.id,
      bodyReq,
      {
        new: true,
      },
    );

    if (!dbResponse) {
      res.status(400).send(
        generateResponse({
          data: null,
          error: "User ID doesn't exist",
        }),
      );
    }

    res.status(200).send(
      generateResponse({
        data: dbResponse,
      }),
    );
  } catch (error) {
    res.status(500).send(
      generateResponse({
        data: req.params.id,
        error: error,
      }),
    );

    next(error);
  }
}

module.exports = {
  getAllUsers: getAllUsers,
  getUserById: getUserById,
  createUser: createUser,
  deleteUser: deleteUser,
  updateUser: updateUser,
};
