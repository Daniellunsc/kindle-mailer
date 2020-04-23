const nodemailer = require("nodemailer");
const files = require("./file");
const chalk = require("chalk");
const cli = require("./cli");
const config = require("../config.json");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: config.username,
    pass: config.password,
  },
});

module.exports = {
  sendMail: (filePath) => {
    const attachment = {
      filename: "arquivo.mobi",
      content: files.readFile(filePath),
    };

    let mailOptions = {
      from: config.username,
      to: config.amazonMail,
      subject: "",
      attachments: [attachment],
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        cli.logWithColor(`ERROR ao enviar email: ${err}`, chalk.red);
        return;
      }
      cli.logWithColor("Enviado", chalk.green);
    });
  },
};
