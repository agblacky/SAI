const fs = require('fs');

function test() {
  fs.readFile('actions.json', 'utf8', function (err, data) {
    // Display the file content
    let ary = JSON.parse(data);
    return ary;
  });
}

let testvar = test();
console.log(testvar);