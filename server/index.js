const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

// Use body-parser middleware to parse JSON bodies
app.use(bodyParser.json());

// Enable CORS
app.use(cors());

app.post("/signup", async (req, res) => {
  const { username, email, phonenumber, message } = req.body;

  // Logging the request body for debugging
  console.log(req.body);

  // Create form data
  const formData = {
    name: username,
    email: email,
    phonenumber: phonenumber,
    message: message,
  };

  // Creating a transporter for sending emails
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ceitkishanth25@gmail.com",
      pass: "nzjkjuwujeswusvt", // Removed spaces
    },
  });

  try {
    // Sending the email
    const info = await transporter.sendMail({
      from: "ceitkishanth25@gmail.com", // Use the provided email as "from"

      to: "dreaminterior23@gmail.com",//dreaminterior23@gmail.com
      subject: "Dream Interiors",
      text: "Hello world?", // This is the plain text body
      html: `<p>Name: ${username}</p><p>Email ID: ${email}</p> <p>Phone Number: ${phonenumber}</p><p>Message: ${message}</p>`, // HTML body with username and message
    });

    console.log("Email sent: ", info.response);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error("Error sending email: ", error);
    res.status(500).send("Error sending email");
  }
});

app.listen(3000, () => {
  console.log("Server connected on port 3000");
});
