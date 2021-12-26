const fs = require("fs");

module.exports = (isLs) => {
  if (isLs) {
    fs.readFile("path/to/plans/task.txt", "UTF-8", (err, data) => {
      if (data !== undefined) {
        var array = data.split("\n");

        if (array.length > 1) {
          array.map((item, index) => {
            index &&
              console.log(
                index + ".",
                item.substr(2).trim(),
                "[" + parseInt(item) + "]"
              );
          });
        } else {
          console.log("There are no pending tasks!");
        }
      } else {
        console.log("There are no pending tasks!");
      }
    });
  }
};
