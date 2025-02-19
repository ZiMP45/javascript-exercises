const fibonacci = function(num) {
    if (num < 0) return "OOPS"

    let a = parseInt(num);

    const fib = [0, 1];
    for (let i = 1; i < a; i++) {
        fib.push(fib[i] + fib[i - 1]);
    }
    return fib[a];
};

// Do not edit below this line
module.exports = fibonacci;
