var fs = require('fs');
var buffer = fs.readFileSync( process.argv[2] );
var string = buffer.toString();
var split = string.split("\n");
console.log(split.length-1);


