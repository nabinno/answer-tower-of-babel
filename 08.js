const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {

    let currentValue = 0, nextValue = 1;
    return {
      next() {
        if (nextValue > max) return { done: true };
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
        return { done: false, value: currentValue };
      }
    };
  }
};

for (var n of FizzBuzz) {
  console.log(n);
}
