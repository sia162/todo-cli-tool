const help = require("./utility/help");
const add = require("./utility/add");
const ls = require("./utility/ls");
const del = require("./utility/del");
const done = require("./utility/done");
const report = require("./utility/report");

(() => {
  let flags = [];
  flags = [...process.argv.slice(2)];
  // console.log(flags);

  //Variables to perform different usages
  var isHelp =
    flags.length == 0 || (flags.indexOf("help") !== -1 && flags.length == 1)
      ? true
      : false;

  var isAdd = flags.indexOf("add") !== -1 ? true : false;

  var isLs = flags.indexOf("ls") !== -1 && flags.length == 1 ? true : false;

  var isDel = flags.indexOf("del") !== -1 ? true : false;

  var isDone = flags.indexOf("done") !== -1 ? true : false;

  var isReport =
    flags.indexOf("report") !== -1 && flags.length == 1 ? true : false;

  if (flags[0] >= 0) {
    console.log("Error: Missing tasks string. Nothing added!");
  } else if (!isAdd && !isHelp && !isLs && !isReport && !isDone && !isDel) {
    console.log("Error: Missing tasks string. Nothing added!");
  }

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

  //DONE TASK
  doneFlags = [...process.argv.slice(3)];
  done(isDone, parseInt(doneFlags.toString()));

  //VIEW REPORT
  report(isReport);
})();
