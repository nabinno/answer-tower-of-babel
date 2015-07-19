'use strict';

// 変数 a はblockスコープの中でも外でも再代入可能な有効な変数です。変
// 数宣言の方法(var|let|const)のいずれを利用するべきか検討してください
var a = 5;

// 変数 b は再代入不可能な変数です。変数宣言の方法(var|let|const)のい
// ずれを利用するべきか検討してくだい
const b = process.argv[2];

if (a === 5) {
  // ここでの変数 c は再代入可能ですが、このblockの中でだけ有効な変数
  // です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討し
  // てください。
  let c = 4;
  console.log(c);  // 4

  // ここでの変数 b はblockの中だけで有効な変数です。変数宣言の方法
  // (var|let|const)のいずれを利用するべきか検討してください。
  let b = 8;
  console.log(b); // 8
}


console.log(a); // 5
console.log(b);


try {
  // ここで cに対して値を変更してみましょう。
  c = 1000;
} catch (e) {
  // c is not defined エラーが発生することを確認して下さい。
  console.log(e);
}
