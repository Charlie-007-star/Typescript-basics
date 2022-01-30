function add(a, b, printResult, phrase) {
    var result = a + b;
    if (printResult) {
        console.log(phrase + result);
    }
    else {
        return a + b;
    }
}
var a = 5;
var b = 5.5;
var printResult = true;
var phrase = "Result is: ";
add(a, b, printResult, phrase);
