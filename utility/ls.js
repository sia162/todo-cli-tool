const fs = require("fs");

module.exports = (isLs) => {
  if (isLs) {
    fs.readFile("task.txt", "UTF-8", (err, data) => {
      if (data != undefined) {
        var array = data.split("\n");

        array.map((item, index) => {
          index &&
            console.log(
              index + ".",
              item.substr(2).trim(),
              "[" + parseInt(item) + "]"
            );
        });
      } else {
        console.log("No tasks added yet.");
      }
    });
  }
};
