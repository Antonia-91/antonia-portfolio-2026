const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config(); // <— load .env

const app = express();
app.use(cors());
app.use(express.json());

console.log("EMAIL_USER =", process.env.EMAIL_USER);
console.log(
  "PASS length =",
  process.env.EMAIL_PASS ? process.env.EMAIL_PASS.length : 0
);

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.error(err);
  else console.log("Ready to Send");
});

app.post("/contact", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const name = `${firstName} ${lastName || ""}`.trim();

  const mail = {
    from: process.env.EMAIL_USER,
    replyTo: email,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone || "-"}</p>
           <p>Message: ${message}</p>`,
  };

  transporter.sendMail(mail, (error) => {
    if (error) return res.json({ code: 500, status: "Send failed", error });
    return res.json({ code: 200, status: "Message Sent" });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on ${PORT}`));
