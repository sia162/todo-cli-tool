const fs = require("fs");

module.exports = (isAdd, addFlags) => {
  if (isAdd) {
    if (addFlags != []) {
      var tasktoadd = addFlags.toString().replace(/,/g, " ");
      fs.appendFile(
        "task.txt",
        "\n" + addFlags.toString().replace(/,/g, " "),
        (err) => {
          if (err != null) console.log(err);
          else {
            console.log(
              "Added task: " +
                `"${tasktoadd.substr(2).trim()}"` +
                " with priority " +
                parseInt(tasktoadd)
            );
          }
        }
      );
    }

    //reading task.txt and sorting the data
    var array;
    fs.readFile("task.txt", "UTF-8", (err, data) => {
      if (data != undefined) {
        array = data.split("\n");

        array.sort(function (x, y) {
          var xp = parseInt(x);
          var yp = parseInt(y);
          return xp == yp ? 0 : xp < yp ? -1 : 1;
        });

        //updating the sorted tasks
        fs.writeFile(
          "task.txt",
          array.toString().replace(/,/g, "\n"),
          (err) => {
            if (err != null) console.log(err);
          }
        );
      }
    });
  }
};
