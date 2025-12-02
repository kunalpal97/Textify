import dotenv from "dotenv";
import { brevoTransporter } from "../lib/brevoTransporter.js";
import { createWelcomeEmailTemplate } from "./emailTamplates.js";
import { ENV } from "../lib/env.js";
dotenv.config();

export const sendWelcomeEmail = async (email, name, CLIENT_URL) => {
    
  try {
    await brevoTransporter.sendMail({
      from: `${ENV.EMAIL_FROM_NAME} <${ENV.EMAIL_FROM}>`,
      to: email,
      subject: "Welcome to Textify!",
      html: createWelcomeEmailTemplate(name, CLIENT_URL),
    });

    console.log("Welcome email sent successfully 🎉");

  } catch (error) {
    console.log("Error sending email:", error);
    throw new Error("Failed to send the welcome email");
  }
};
