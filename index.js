#! /usr/bin/env node

const uuid = require("uuid");
const { program } = require('commander');

program
  .option('-v, --version <num>');

program.parse();

const options = program.opts();

const vToUse = uuid[`v${options.version}`]
if(vToUse) {
    console.log(vToUse());
}