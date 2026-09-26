const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


// ========================================
// MIDDLEWARE
// ========================================

app.use(cors());

app.use(express.json());


// ========================================
// MOCK USER
// ========================================

const MOCK_USER = {
  email: "login@example.com",
  password: "Flixup@3116",
};


// ========================================
// TEST ROUTE
// ========================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Netflix Login Backend is running!",
  });
});


// ========================================
// LOGIN API
// ========================================

app.post("/api/login", (req, res) => {

  const { email, password } = req.body;


  // Check required fields
  if (!email || !password) {

    return res.status(400).json({
      success: false,
      message: "Email and password are required.",
    });

  }


  // Check credentials
  if (
    email === MOCK_USER.email &&
    password === MOCK_USER.password
  ) {

    return res.status(200).json({
      success: true,
      message: "Login successful!",

      user: {
        email: MOCK_USER.email,
      },
    });

  }


  // Invalid credentials
  return res.status(401).json({
    success: false,
    message: "Invalid email or password.",
  });

});


// ========================================
// LOCAL DEVELOPMENT
// ========================================

if (require.main === module) {

  const PORT = process.env.PORT || 5000;

  app.listen(PORT, () => {

    console.log(
      `Server running on http://localhost:${PORT}`
    );

  });

}


// ========================================
// EXPORT FOR VERCEL
// ========================================

module.exports = app;