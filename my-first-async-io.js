const fs = require("fs");

const filePath = process.argv[2];
fs.readFile(filePath, function (err, fileContent) {
    if (err) {
        return console.error(err);
    }
    let numberOfNewlines = fileContent.toString().split("\n").length - 1;
    console.log(numberOfNewlines);
});




