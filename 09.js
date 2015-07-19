const max = process.argv[2];

let FizzBuzz = function*() {
  let currentValue = 0, nextValue = 1;
  while ((nextValue - 1) < max) {
    if        (nextValue % 15 === 0) {
      currentValue  = "FizzBuzz";
    } else if (nextValue % 3  === 0) {
      currentValue  = "Fizz";
    } else if (nextValue % 5  === 0) {
      currentValue  = "Buzz";
    } else {
      currentValue = nextValue;
    }
    nextValue++;
    yield currentValue;
  }
}();

for (var n of FizzBuzz) {
  console.log(n);
}
