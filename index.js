const chalk = require("chalk");
const files = require("./lib/file");
const cli = require("./lib/cli");
const mailer = require("./lib/mailer");
const config = require("./config.json");

cli.showMenuTitle("Kindle Mail");
const setup = async () => {
  cli.showMenuTitle("Kindle Mail - Setup");
  const credentials = await cli.askEmailCredentials();
  files.writeFile("config.json", JSON.stringify(credentials));
};

const run = async () => {
  const { file } = await cli.askFileToSend();
  const isValidPath = files.directoryExists(file);
  if (isValidPath && files.validateFile(file)) {
    mailer.sendMail(file);
    return;
  }
  cli.logWithColor("Arquivo ou caminho inválido", chalk.red);
  run();
};

if (!files.directoryExists("config.json") || !config.username) {
  setup();
} else {
  run();
}
