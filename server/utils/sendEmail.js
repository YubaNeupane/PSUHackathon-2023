import nodemailer from "nodemailer";
import dotenv from "dotenv";
import generateHTML from "./generateEmailHTML.js";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export default async (email, subject, text, name) => {
  try {
    const response = await transporter.sendMail({
      from: process.env.NODEMAILER_USER,
      to: email,
      subject: subject,
      html: generateHTML({
        name: name,
        link: text,
      }),
    });
    return true;
  } catch (error) {
    console.log(error.message);
  }
};
