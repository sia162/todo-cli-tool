const fs = require("fs");

module.exports = (isDel, indexToDel) => {
  if (isDel) {
    if (indexToDel != NaN) {
      fs.readFile("task.txt", "UTF-8", (err, data) => {
        var array;
        if (data != undefined) {
          array = data.split("\n");

          var elepresent = false;
          array.map((item, index) => {
            if (indexToDel === index) elepresent = true;
          });

          if (elepresent) {
            array = array.filter((item, index) => index !== indexToDel);

            //   updating the tasks
            fs.writeFile(
              "task.txt",
              array.toString().replace(/,/g, "\n"),
              (err) => {
                if (err != null) console.log(err);
              }
            );

            console.log(`Deleted item with index ${indexToDel}`);
          } else {
            console.log(
              `Error: item with index ${indexToDel} does not exist. Nothing deleted.`
            );
          }
        }
      });
    }
  }
};
