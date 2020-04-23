const inquirer = require("inquirer");
const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");

module.exports = {
  askFileToSend: () => {
    const argv = require("minimist")(process.argv);
    const questions = [
      {
        name: "file",
        type: "input",
        message: "Digite o caminho do arquivo a ser enviado",
        default: argv._[0],
        validate: function (value) {
          if (value.length) {
            return true;
          }
          return "Digite o caminho do arquivo a ser enviado";
        },
      },
    ];
    return inquirer.prompt(questions);
  },

  askEmailCredentials: () => {
    const questions = [
      {
        name: "username",
        type: "input",
        message:
          "Digite seu usuário - nada é armazenado fora do seu computador.",
        validate: function (value) {
          if (value.length) {
            return true;
          }
          return "Digite seu usuário";
        },
      },
      {
        name: "password",
        type: "input",
        message: "Digite sua senha - nada é armazenado fora do seu computador.",
        validate: function (value) {
          if (value.length) {
            return true;
          }
          return "Digite sua senha";
        },
      },
      {
        name: "amazonMail",
        type: "input",
        message:
          "Digite o email Amazon do seu Kindle - nada é armazenado fora do seu computador.",
        validate: function (value) {
          if (value.length) {
            return true;
          }
          return "Digite o email Amazon do seu Kindle - nada é armazenado fora do seu computador.";
        },
      },
    ];
    return inquirer.prompt(questions);
  },

  logWithColor: (message, functionColor) => {
    console.log(functionColor(message));
  },

  showMenuTitle: (message) => {
    clear();
    console.log(
      chalk.redBright(figlet.textSync(message, { horizontalLayout: "full" }))
    );
  },
};
