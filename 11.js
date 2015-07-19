// コマンドライン引数から任意の数の文字列を受け取り、最初の一文字だけ
// を取得して、結合するための関数を作ってみましょう。

var inputs = process.argv.slice(2);
var result =
      inputs.map((e) => {
        return e.substr(0, 1);
      })
      .reduce((v, e) => {
        return v + e;
      });
console.log(result);
