const fs = require('fs')
const path = require('path')
module.exports = function (directory, filter, callback) {
    fs.readdir(directory, (err, list) => {
        if (err) {
            return callback(err)
        }
        callback(null, list.filter(function (entry) {
            return path.extname(entry) === "." + filter
        }))
    })
}