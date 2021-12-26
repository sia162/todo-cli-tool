const fs = require("fs");

module.exports = (isReport) => {
  if (isReport) {
    fs.readFile("path/to/plans/task.txt", "UTF-8", (err, data) => {
      if (data != undefined) {
        var array = data.split("\n");

        console.log(`Pending : ${array.length - 1}`);

        array.map((item, index) => {
          index &&
            console.log(
              index + ".",
              item.substr(2).trim(),
              "[" + parseInt(item) + "]"
            );
        });
      } else {
        console.log("No tasks to show.");
      }
    });

    fs.readFile("path/to/plans/completed.txt", "UTF-8", (err, data) => {
      if (data != undefined) {
        var comarray = data.split("\n");

        console.log(`Completed : ${comarray.length - 1}`);

        comarray.map((item, index) => {
          index && console.log(index + ".", item.trim());
        });
      } else {
        console.log("No report of completed tasks to show.");
      }
    });
  }
};
