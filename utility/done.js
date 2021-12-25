const fs = require("fs");

module.exports = (isDone, indexToDone) => {
  if (isDone) {
    if (indexToDone) {
      fs.readFile("task.txt", "UTF-8", (err, data) => {
        var array;
        if (data != undefined) {
          array = data.split("\n");

          var elepresent = true;
          if (indexToDone >= array.length || indexToDone < 1)
            elepresent = false;

          if (elepresent) {
            var taskdone = array[indexToDone].substr(2).trim();

            // updating complete file
            fs.appendFile("completed.txt", "\n" + taskdone, (err) => {
              if (err != null) console.log(err);
            });

            //updating task file
            array = array.filter((item, index) => index !== indexToDone);

            fs.writeFile(
              "task.txt",
              array.toString().replace(/,/g, "\n"),
              (err) => {
                if (err != null) console.log(err);
              }
            );

            console.log("Marked item as done.");
          } else {
            console.log(
              `Error: no incomplete item with index ${indexToDone} exists.`
            );
          }
        }
      });
    } else {
      console.log("Error: 'task help' for more information!");
    }
  }
};
