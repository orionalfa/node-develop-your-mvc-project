const db = require("../models");
const { encryptString } = require("../utils/encrypt");
const { generateResponse } = require("../utils/generate-response");
const { compareEncrypted } = require("../utils/encrypt");

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

async function userSignIn(req, res, next) {
  const { email, pass } = req.body;
  console.log(req.body);
  try {
    const foundUser = await db.Users.findOne({ email: email });
    if (foundUser === null) {
      return res.status(400).send(`User does not exist`);
    } else {
      const matchPassword = await compareEncrypted({
        plainData: pass,
        encryptedData: foundUser.pass,
      });
      if (matchPassword) {
        // generate the access token
        // const accessToken = generateAccessToken({ foundUser });

        // generating random refresh token and storing it
        // in the session data key.
        // const refreshToken = randToken.generate(256);
        // sessionData.refreshTokens[refreshToken] = foundUser.email;

        // return response
        return res.status(200).send({
          message: `Welcome ${foundUser.name}`,
          // accessToken: accessToken,
          // refreshToken: refreshToken,
          id: foundUser._id,
        });
      } else if (!matchPassword) {
        return res.status(400).send(`Wrong password`);
      }
    }
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
}

async function createUser(req, res, next) {
  //console.log(req.body);
  

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
  userSignIn: userSignIn,
};
