import nodemailer from "nodemailer";
import { ENV } from "./env.js"

export const brevoTransporter = nodemailer.createTransport({
  host: ENV.BREVO_HOST,
  port: Number(ENV.BREVO_PORT),
  auth: {
    user: ENV.BREVO_USERNAME,
    pass: ENV.BREVO_PASSWORD,
  },
});
