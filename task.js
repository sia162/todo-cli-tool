const help = require("./utility/help");
const add = require("./utility/add");
const ls = require("./utility/ls");
const del = require("./utility/del");

(() => {
  let flags = [];
  flags = [...process.argv.slice(2)];

  //Variables to perform different usages
  var isHelp =
    flags.toString() == "" || flags.indexOf("help") !== -1 ? true : false;

  var isAdd = flags.indexOf("add") !== -1 ? true : false;

  var isLs = flags.indexOf("ls") !== -1 ? true : false;

  var isDel = flags.indexOf("del") !== -1 ? true : false;

  //WELCOME
  help(isHelp);

  //LIST ALL TASK
  ls(isLs);

  //ADD TASK
  addFlags = [...process.argv.slice(3)];
  add(isAdd, addFlags);

  //DELETE TASk
  delFlags = [...process.argv.slice(3)];
  del(isDel, parseInt(delFlags.toString()));
})();
