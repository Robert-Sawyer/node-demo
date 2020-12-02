const path = require('path');

const filelocation = path.join(__dirname, 'app.js');

const fileName = path.basename(filelocation)

console.log(fileName)