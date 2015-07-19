// // 可変長のパラメータを受け取る関数を実現する場合、これまでは
// // arguments と呼ばれる配列ライクなオブジェクトを扱うことで実現されて
// // いました。しかし、 arguments は配列ライクなオブジェクトではあります
// // が、配列ではありません。つまり、配列のメソッドである、reduceやmapの
// // ようなメソッドは使えませんでした。
//
// // ES6からはこの arguments を使わなくても引数に ... を付けることで可変
// // 長パラメータの処理を実現できます。この機能をRestパラメータと呼びま
// // す。Restパラメータを使うことで、配列ライクなオブジェクトではない配
// // 列として可変長パラメータを受け取ることが可能です。
//
// var sum = function(...args){
//   let sum = args.reduce((sum, n) => sum + n);
//   return sum;
// };
// console.log(sum(1, 2, 3)); // 6
//
// // また関数呼び出しの際に配列のオブジェクトを可変長パラメータに変換す
// // ることも可能です。これを Spread コールと呼びます。
//
// var sum = function(...args) {
//   let sum = args.reduce((sum, n) => sum + n);
//   return sum;
// };
// var array = [1, 2, 3, 4];
// console.log(sum(...array)); // 10

//////////////////////////////////////////////////////////////////////
// 問題

// JavaScript でこの可変長パラメータである Rest パラメータ呼び出しを使っ
// て、平均を取る関数を作ってみましょう。

var args = process.argv[2].split(",");
args     = args.map((arg) => +arg);

// ここに平均を取るavg関数を作る、作る際にはRESTパラメータを利用するこ
// と。

var avg = (...args) => {
  let sum = args.reduce((sum, n) => sum + n);
  return  sum / args.length;
};
console.log(avg(...args));
