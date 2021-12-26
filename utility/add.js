const fs = require("fs");

module.exports = (isAdd, addFlags) => {
  if (isAdd) {
    if (addFlags.length !== 0 && addFlags.length !== 1) {
      //checking if task.txt already exists or not
      const pathtotask = "path/to/plans/task.txt";
      var taskfile = 0;
      try {
        if (fs.existsSync(pathtotask)) {
          taskfile = 1; //file exists
        }
      } catch (err) {
        taskfile = 0; //file does not exists
      }

      //checking if completed.txt already exists or not
      const pathtocomplete = "path/to/plans/completed.txt";
      var completedfile = 0;
      try {
        if (fs.existsSync(pathtocomplete)) {
          completedfile = 1; //file exists
        }
      } catch (err) {
        completedfile = 0; //file does not exists
      }

      //adding new file or adding tasks
      var tasktoadd = addFlags.toString().replace(/,/g, " ");

      if (taskfile !== 1) {
        fs.writeFileSync(
          "path/to/plans/task.txt",
          "\n" + tasktoadd,
          (err) => {}
        );
      } else {
        //removing duplicates of task
        var array;

        fs.readFile("path/to/plans/task.txt", "UTF-8", (err, data) => {
          if (data != undefined) {
            array = data.split("\n");

            // array.map((item, index) => {
            //   if (tasktoadd.substr(2).trim() === item.substr(2).trim())
            //     array.splice(index, 1, tasktoadd);
            // });

            array.push(tasktoadd);

            //sorting
            array.sort(function (x, y) {
              var xp = parseInt(x);
              var yp = parseInt(y);
              return xp == yp ? 0 : xp < yp ? -1 : 1;
            });

            // removing duplicates
            array = [...new Set(array)];

            fs.writeFile(
              "path/to/plans/task.txt",
              array.toString().replace(/,/g, "\n"),
              (err) => {
                if (err != null) console.log(err);
              }
            );
          }
        });
      }

      console.log(
        "Added task: " +
          `"${tasktoadd.substr(2).trim()}"` +
          " with priority " +
          parseInt(tasktoadd)
      );
    } else {
      console.log("Error: Missing tasks string. Nothing added!");
    }
  }
};
