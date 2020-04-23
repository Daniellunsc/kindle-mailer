const fs = require("fs");
const path = require("path");
const cli = require("./cli");
const chalk = require("chalk");

module.exports = {
  directoryExists: (filePath) => {
    return fs.existsSync(filePath);
  },

  validateFile: (filePath) => {
    const extension = filePath.split(".").pop();
    return extension == "mobi";
  },

  readFile: (filePath) => {
    return fs.createReadStream(filePath);
  },

  writeFile: (fileName, content) => {
    return fs.writeFile(fileName, content, (err) => {
      if (err) {
        cli.logWithColor(
          "ERROR ao escrever o arquivo de configuração",
          chalk.red
        );
        return;
      }

      cli.logWithColor(
        "Configuração concluída, rode o cli novamente.",
        chalk.green
      );
    });
  },
};
