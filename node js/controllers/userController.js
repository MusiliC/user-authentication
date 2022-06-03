const mssql = require("mssql");
const config = require("../config/db");
const bcrypt = require("bcrypt");
const {
  schemaLoginUser,
  schemaCreateUser,
  schemaForgotPassword,
} = require("../helpers/validators");

const jwt = require("jsonwebtoken");

const { v4: uuidv4 } = require("uuid");

async function createUser(req, res) {
  const { id, username, phone, email, password } = req.body;

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const { error } = schemaCreateUser.validate(req.body);

  if (error)
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });

  try {
    let pool = await mssql.connect(config);
    const id = uuidv4();
    let user = await pool
      .request()
      .input("id", id)
      .input("username", username)
      .input("phone", phone)
      .input("email", email)
      .input("password", hash)
      .execute(`createUser`);

    user = req.body;

    //create token

    const token = jwt.sign({ id: id }, process.env.JWT_SECRET);
    return res.json({
      token,
      user,
    });
    // res.json("user added successfully");
  } catch (error) {
    console.log(error);
  }
}

async function getUsers(req, res) {
  try {
    let pool = await mssql.connect(config);
    let users = await pool.request().execute(`getUsers`);

    return res.json(users.recordsets[0]);
  } catch (error) {
    console.log(error);
  }
}

async function getUser(req, res) {
  const id = req.params.id;

  try {
    let pool = await mssql.connect(config);
    let user = await pool.request().input("id", id).execute(`getUser`);
    return res.json(user.recordsets[0][0]);
  } catch (error) {
    console.log(error);
  }
}

async function logUser(req, res) {
  const { email, password } = req.body;
  const { error } = schemaLoginUser.validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });

  try {
    let pool = await mssql.connect(config);
    let user = await pool
      .request()
      .input("email", email)
      
      .execute(`loginUser`);

      console.log(user.recordsets);
   

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.send("Invalid credentials");

    const token = jwt.sign(user.email, user.id);
    res.send({ success: true, user, token });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  createUser,
  getUsers,
  getUser,
  logUser,
};
