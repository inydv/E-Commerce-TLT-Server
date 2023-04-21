// IMPORT REQUIRED PACKAGES
const { NodeMailer, Path, EJS } = require("../Configs/Packages.Import");

module.exports = async ({ email, link, title, subject }) => {
  const transporter = NodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    service: "gmail",
    port: Number(465),
    secure: Boolean(true),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const templatePath = Path.join(__dirname, "../Views/newjob.ejs");
  const data = await EJS.renderFile(templatePath, {
    Title: title,
    Body: `<a href=${link}>${link}</a>`,
  });

  const logoPath = Path.join(__dirname, "../Views/logo.png");
  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: email,
    subject: subject,
    html: data,
    attachments: [
      {
        filename: "logo.png",
        path: logoPath,
        cid: "logo",
      },
    ],
  });
};
