// // デストラクチャリング、和訳すると分配束縛と呼ばれる機能です。Clojure
// // に存在する機能で、これを利用すると配列オブジェクトで設定した値を取
// // り出しやすくなります。
//
// // 試しに一つ例を出しましょう。値をswapするのに今までは、一時変数に入
// // れてから値を交換していました。
//
// var hoge = 123;
// var fuga = 456;
//
// // 値をswapする
// var tmp = hoge;
// hoge = fuga;
// fuga = tmp;
//
// // デストラクチャリングを使うとこれをもっと簡単に行えるようになります。
//
// var hoge = 123;
// var fuga = 456;
//
// // 値をswapする
// var [fuga, hoge] = [hoge, fuga];
//
// // これだけです、配列に２つの値を入れて左辺で交換するだけで実現できま
// // す。この他にも配列から任意の要素を取得する事もできます。
//
// var [a, [b], [c]] = ['hello', [', '], ['world']];
//
// console.log(a + b + c); //hello, world (aに"hello", bに",", cに"world"が入ってる )
//
// // また、Objectの値を取得するのにも利用可能です。
//
// var pt = {x: 123, y: 444};
// var {x, y} = pt;
// console.log(x, y); // 123 444

//////////////////////////////////////////////////////////////////////
// # 問題

// 以下のJSONを デストラクチャリングを使って name.family と birth.day
// を取得してみましょう。

var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

// ここでデストラクチャリングを使ってname.familyをfamilyNameに。
// birth.day を birthDay に束縛してください。

var {
  name:  { family: familyName },
  birth: { day: birthDay }
} = json;

console.log(familyName);
console.log(birthDay);
