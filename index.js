function calculateStringLength(string) {
    return string.length;
}

var inputString = prompt("ป้อนสตริงที่คุณต้องการคำนวณความยาว:");
var length = calculateStringLength(inputString);
console.log("ความยาวของสตริง '" + inputString + "' คือ " + length + " ตัวอักษร");
