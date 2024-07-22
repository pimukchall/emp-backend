const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { connection } = require("../database");
const e = require("express");

require("dotenv").config();

const secret = process.env.secret;

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [results] = await connection
      .promise()
      .query("SELECT * FROM `users` WHERE `email` = ?", email);
    const userData = results[0];

    if (!userData) {
      return res.status(400).json({ message: "Login failed(Invalid email or password)" });
    }

    const match = await bcrypt.compare(password, userData.password);
    if (!match) {
      return res.status(400).json({ message: "Login failed(Invalid email or password)" });
    }

    const token = jwt.sign({ email: userData.email, id: userData.id }, secret, { expiresIn: "1h" });
    res.cookie("token", token, {
      maxAge: 3600000,
      secure: true,
      httpOnly: true,
      sameSite: "none",
    });

    res.json({ success: true, token: token });
  } catch (error) {
    console.log("Login error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.refresh = async (req, res) => {
  try {
    const token = req.cookies.token;
    console.log("token", token);

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, secret);
    const [results] = await connection.promise().query("SELECT * FROM users WHERE id = ?", decoded.id);
    const userData = results[0];

    if (!userData) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    res.json({
      user: {
        id: userData.id,
        fname: userData.fname,
        lname: userData.lname,
        email: userData.email,
        role_id: userData.role_id,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

exports.logout = async (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
}

exports.register = async (req, res) => {
  try {
    const { fname, lname, department_id, role_id, email, password, phone, empcode, date_in } = req.body
    const hashedPassword = await bcrypt.hash(password, 10);
    const userData = {
      fname,
      lname,
      department_id,
      role_id,
      email,
      password: hashedPassword,
      phone,
      empcode,
      date_in,
    }
    const [results] = await connection.promise().query("INSERT INTO users SET ?", userData);
    res.json({ message: "User created", results });
  }
  catch (error) {
    console.log(error);
    res.json({ message: "User creation failed", error });
  }
}

exports.updatepassword = async (req, res) => {
  try {
    const { email, password, newpassword } = req.body;
    const [results] = await connection.promise().query("SELECT * FROM `users` WHERE `email` = ?", email);
    const userData = results[0];

    if (!userData) {
      return res.status(400).json({ message: "Update password failed(Invalid email or password)" });
    }

    const match = await bcrypt.compare(password, userData.password);
    if (!match) {
      return res.status(400).json({ message: "Update password failed(Invalid email or password)" });
    }

    const hashedPassword = await bcrypt.hash(newpassword, 10);
    await connection.promise().query("UPDATE `users` SET `password` = ? WHERE `email` = ?", [hashedPassword, email]);
    res.json({ message: "Password updated" });
  } catch (error) {
    console.log("Update password error", error);
    res.status(500).json({ message: "Internal server error" });
  }
}