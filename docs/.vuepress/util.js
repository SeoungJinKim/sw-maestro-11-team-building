const fs = require("fs");

function getFilesOf(directory) {
  let ret = [];

  fs.readdirSync(directory).reduce((refineFiles, fileName) => {
    let file = `team/${fileName}`;

    ret.push(file);
  }, []);

  return ret;
}

module.exports = { getFilesOf };
