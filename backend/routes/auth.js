const router = require("express").Router();
const Joi = require("joi");
const { User } = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    // Validate the request body
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    // Check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    // Compare the provided password with the stored hashed password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid email or password" });
    }

    // Generate a token and return a success response
    const token = user.generateAuthToken();  // Ensure that generateAuthToken method exists
    res.status(200).send({
      token, // Include the JWT token in the response
      message: "Logged in successfully",
    });
  } catch (error) {
    console.error("Login error:", error.message);  // Log the error to help debugging
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Validate the incoming request data
const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

module.exports = router;
