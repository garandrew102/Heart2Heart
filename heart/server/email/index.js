const sgMail = require("@sendgrid/mail");
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const htmlEmail = `
  <style>
  .sampleH1{
    color: orange;
  }
  </style>
  <h1 class="sampleh1" >Welcome to Heart2Heart!</h1>
  <div>Thank you for signing up!</div>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: "Heart2Heart",
    text: `Hi ${name}! You've created an account! Please feel free to explore and tell us about your experience and journey!`,
    html: htmlEmail,
  });
};

const forgotPasswordEmail = (email, token) => {
  const exampleHTMLEmail = `
  <div>Click the link below to reset your password</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: "Heart2Heart - Password Reset.",
    text: `Hi ${name}! Please click the link below to reset your password.`,

    html: exampleHTMLEmail,
  });
};

module.exports = {
  sendWelcomeEmail,
  forgotPasswordEmail,
};
