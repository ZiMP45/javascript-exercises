const reverseString = function(string) {
    let myArr = string.split("");
    string = "";
    for (let i = myArr.length - 1; i >= 0; i--) {
        string += myArr[i];
    }

    return string;
};

// Do not edit below this line
module.exports = reverseString;
