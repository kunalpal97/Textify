// emailTemplates.js

export function createWelcomeEmailTemplate(name, clientURL) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Welcome to Textify!</title>
  </head>

  <body style="
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #eef3f8;
      margin: 0;
      padding: 30px;
      -webkit-font-smoothing: antialiased;
  ">

      <!-- Outer Wrapper -->
      <div style="
          max-width: 650px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
      ">

          <!-- Header -->
          <div style="
              background: linear-gradient(135deg, #36D1DC, #5B86E5);
              padding: 40px 20px;
              text-align: center;
          ">
              <img 
                  src="https://img.freepik.com/free-vector/hand-drawn-message-element-vector-cute-sticker_53876-118344.jpg"
                  alt="Messenger Logo"
                  style="
                      width: 85px;
                      height: 85px;
                      margin-bottom: 20px;
                      border-radius: 50%;
                      background-color: white;
                      padding: 12px;
                      box-shadow: 0 4px 12px rgba(255,255,255,0.3);
                  "
              />
              <h1 style="
                  color: white;
                  margin: 0;
                  font-size: 30px;
                  font-weight: 700;
                  letter-spacing: 0.5px;
              ">
                  Welcome to Textify!
              </h1>
              <p style="
                  color: #f0f4ff;
                  margin-top: 10px;
                  font-size: 16px;
                  opacity: 0.9;
              ">
                  Your space to chat, share, and stay connected.
              </p>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">

              <p style="font-size: 18px; color: #444;">
                  <strong>Hello ${name},</strong>
              </p>

              <p style="
                  font-size: 16px;
                  color: #555;
                  line-height: 1.7;
              ">
                  Thank you for joining <strong>Textify</strong> — your personal messaging hub
                  to chat, share images, and stay connected with the people who matter the most.
              </p>

              <!-- Highlight Box -->
              <div style="
                  background-color: #f7fafc;
                  padding: 25px;
                  border-radius: 12px;
                  border-left: 5px solid #5B86E5;
                  margin-top: 25px;
                  box-shadow: inset 0 0 6px rgba(0,0,0,0.03);
              ">
                  <p style="
                      font-size: 17px;
                      margin-bottom: 12px;
                      font-weight: 600;
                  ">
                      Here's how to get started:
                  </p>

                  <ul style="
                      padding-left: 20px;
                      color: #444; 
                      font-size: 15px;
                      line-height: 1.6;
                  ">
                      <li>Complete your profile so friends recognize you</li>
                      <li>Add a cool profile picture</li>
                      <li>Start chatting instantly with your contacts</li>
                      <li>Share images & moments easily</li>
                  </ul>
              </div>

              <!-- Button -->
              <div style="text-align: center; margin-top: 35px;">
                  <a href="${clientURL}" style="
                      background: linear-gradient(135deg, #5B86E5, #36D1DC);
                      color: white;
                      padding: 14px 32px;
                      border-radius: 10px;
                      text-decoration: none;
                      font-size: 17px;
                      font-weight: 600;
                      box-shadow: 0 6px 15px rgba(91,134,229,0.35);
                      display: inline-block;
                  ">
                      Go to Dashboard
                  </a>
              </div>

              <!-- Footer -->
              <p style="
                  font-size: 14px;
                  color: #999;
                  margin-top: 35px;
                  text-align: center;
                  line-height: 1.5;
              ">
                  If you did not create this account, feel free to ignore this email.
              </p>

          </div>
      </div>

  </body>
  </html>
  `;
}
