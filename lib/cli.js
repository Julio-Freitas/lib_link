#!/usr/bin/env node

const chalk = require("chalk");

const getFile = require("./index");
const valideURLs = require("./http-validation");

const caminho = process.argv;

async function processText(pahLink) {
  const resultado = await getFile(pahLink[2]);
  console.log(resultado);
  if (caminho[3] === "validar") {
    console.log(chalk.yellow("links validados"), await valideURLs(resultado));
  } else {
    console.log(chalk.yellow("lista de links"), resultado);
  }
}

processText(caminho);
