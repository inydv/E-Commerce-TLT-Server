// IMPORT REQUIRED PACKAGES
const { NodeMailer, Path, EJS } = require("../Configs/Packages.Import");

// EXPORT SEND EMAIL
module.exports = async ({ Title, Email, Subject_1, Subject_2, Link }) => {
  // CREATE TRANSPORTER
  const Transporter = NodeMailer.createTransport({
    host: process.env.EMAIL_HOST,
    service: "gmail",
    port: Number(465),
    secure: Boolean(true),
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // TEMPLATE PATH
  const TemplatePath = Path.join(__dirname, "../Templates/main.ejs");

  // TEMPLATE
  const HTML = await EJS.renderFile(TemplatePath, {
    Subject_1: Subject_1,
    Subject_2: Subject_2,
    Link: Link,
  });

  // LOGO PATH
  // const LogoPath = Path.join(__dirname, "../Views/logo.png");

  // SEND TRANSPORT
  await Transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to: Email,
    subject: Title,
    html: HTML,
    // attachments: [
    //   {
    //     filename: "logo.png",
    //     path: LogoPath,
    //     cid: "logo",
    //   },
    // ],
  });
};
