import { UserTable } from "../../model/auth/authmodel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
//Register User

export const RegisterUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "username and password are required" });
  }
  try {
    UserTable.findOne({ where: { name: username } }).then((findresult) => {
      if (findresult) {
        return res.status(400).json({
          message: "user already exist",
        });
      } else {
        UserTable.create({
          name: username,
          password: password,
        }).then((user) => {
          return res.status(201).json({
            message: "user registration successful please login!",
          });
        });
      }
    });
  } catch (err) {
    return res.status(400).json({
      message: "user registration failed",
      data: err.message,
    });
  }
};

//Login User

export const LoginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "username and password are required" });
  }
  try {
    UserTable.findAll({ where: { name: username, password: password } }).then(
      (result) => {
        // console.log("--result--", result);
        if (result.length > 0) {
          result.map((ele) => {
            return res.status(200).json({
              message: "user login successful",
              data: {
                id: ele.dataValues.id,
                name: ele.dataValues.name,
                auth_token: jwt.sign(ele.dataValues, process.env.Secret_Key),
                createdAt: ele.dataValues.createdAt,
              },
            });
          });
        } else {
          return res.status(400).json({
            message: "invalid credentials",
          });
        }
      }
    );
  } catch (err) {
    return res.status(400).json({
      message: "user login failed",
      data: err.message,
    });
  }
};
