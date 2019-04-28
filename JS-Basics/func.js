// function set() {
//     console.log("this is set1");
// }

// function set() {
//     console.log("This is set2");
// }


// function hello(val, func) {
//     console.log(val);
//     func();
// }

// hello(10, function(){
//     console.log("I am anonymous function");
// });

var readLine = require('readline-sync');

var code = readLine.question("Please enter your code : ");

var func = new Function(code);

