"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result is :' + num);
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
var someVariable;
someVariable = add;
console.log(someVariable(2, 3));
printResult(add(5, 5));
addAndHandle(10, 20, function (result) {
    console.log(result);
});
