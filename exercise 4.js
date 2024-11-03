var num = 8;
var str = "hello";
var bool = true;

function checkValue(input) {
    if (typeof input === "number") {
        console.log("element is a number.");
    } else if (typeof input === "string") {
        console.log("element is a string.");
    } else {
        console.log("element is not a number nor a string.");
    }
}

checkValue(num);
checkValue(str);
checkValue(bool);