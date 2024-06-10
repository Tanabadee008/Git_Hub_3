function calculateStringLength(string) {
    return string.length;
}

var inputString = prompt("ป้อนสตริงที่คุณต้องการคำนวณความยาว:");
var length = calculateStringLength(inputString);
console.log("ความม '" + inputString + "' คือ " + length + " ตัวอักษร");
