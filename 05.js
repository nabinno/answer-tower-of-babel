import Math from './program-5-module';

var arg1 = process.argv[2];
var arg2 = process.argv[3];
var math = new Math();

console.log(math.PI);
console.log(math.sqrt(+arg1));
console.log(math.square(+arg2));
