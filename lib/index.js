const chalk = require("chalk");
const fs = require("fs");

function extractLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  let resultsLink = [];
  let temp;

  while ((temp = regex.exec(text)) !== null) {
    resultsLink.push({ [temp[1]]: temp[0] });
  }

  return resultsLink.length === 0 ? "não há links" : resultsLink;
}

function handleError(erro) {
  throw new Error(chalk.red(erro.code, "não há arquivo no caminho"));
}

async function getFile(pahtFiles) {
  const encoding = "utf-8";

  try {
    const text = await fs.promises.readFile(pahtFiles, encoding);

    return extractLinks(text);
  } catch (erro) {
    handleError(erro);
  }
}

module.exports = getFile;
