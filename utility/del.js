const fs = require("fs");

module.exports = (isDel, indexToDel) => {
  if (isDel) {
    if (indexToDel === 0 || indexToDel) {
      fs.readFile("path/to/plans/task.txt", "UTF-8", (err, data) => {
        var array;
        if (data != undefined) {
          array = data.split("\n");

          var elepresent = true;
          if (indexToDel >= array.length || indexToDel < 1) elepresent = false;

          if (elepresent) {
            array = array.filter((item, index) => index !== indexToDel);

            //   updating the tasks
            fs.writeFile(
              "path/to/plans/task.txt",
              array.toString().replace(/,/g, "\n"),
              (err) => {
                if (err != null) console.log(err);
              }
            );

            console.log(`Deleted task #${indexToDel}`);
          } else {
            console.log(
              `Error: task with index #${indexToDel} does not exist. Nothing deleted.`
            );
          }
        }
      });
    } else {
      console.log("Error: Missing NUMBER for deleting tasks.");
    }
  }
};
