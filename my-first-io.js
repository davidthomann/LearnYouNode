const fs = require('fs')

const text = fs.readFileSync(process.argv[2])
const lineCount = text.toString().split('\n').length - 1
console.log(lineCount)

