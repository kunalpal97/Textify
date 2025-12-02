// emailTemplates.js

export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Messenger</title>
  </head>

  <body style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f5f5f5;
  ">

      <!-- Header Section -->
      <div style="
          background: linear-gradient(to right, #36D1DC, #5B86E5);
          padding: 30px;
          text-align: center;
          border-radius: 12px 12px 0 0;
      ">
          <img 
              src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg"
              alt="Messenger Logo"
              style="
                  width: 80px; 
                  height: 80px; 
                  margin-bottom: 20px; 
                  border-radius: 50%; 
                  background-color: white;
                  padding: 10px;
              "
          />

          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">
              Welcome to Messenger!
          </h1>
      </div>

      <!-- Body Section -->
      <div style="
          background-color: white; 
          padding: 35px; 
          border-radius: 0 0 12px 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
      ">
          <p style="font-size: 18px; color: #555;">
              <strong>Hello ${name},</strong>
          </p>

          <p style="font-size: 16px; color: #555;">
              We're excited to have you join our messaging platform! Messenger connects
              you with friends, family, and colleagues in real-time, no matter where they are.
          </p>

          <!-- Highlight Section -->
          <div style="
              background-color: #f9f9fa; 
              padding: 25px; 
              border-radius: 10px; 
              border-left: 4px solid #36D1DC;
              margin-top: 20px;
          ">
              <p style="font-size: 16px; margin: 0 0 10px 0;">
                  <strong>Get started in just a few steps:</strong>
              </p>

              <ul style="padding-left: 18px; color: #444; font-size: 15px;">
                  <li>Complete your profile</li>
                  <li>Add a profile picture</li>
                  <li>Start chatting with your contacts</li>
              </ul>
          </div>

          <!-- Button -->
          <div style="text-align: center; margin-top: 30px;">
              <a href="${clientURL}" style="
                  background-color: #5B86E5;
                  color: white;
                  padding: 12px 22px;
                  border-radius: 8px;
                  text-decoration: none;
                  font-size: 16px;
              ">
                  Go to Dashboard
              </a>
          </div>

          <!-- Footer -->
          <p style="
              font-size: 14px; 
              color: #888; 
              margin-top: 30px; 
              text-align: center;
          ">
              If you did not sign up for this account, you can ignore this message.
          </p>
      </div>

  </body>
  </html>
  `;
}
