// # 問題

// 下記のクラスを ES6 の class 構文を使って書き換えてみましょう。

class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }

  damage() {
    this.health_ = this.health_ - 10;
  }

  getHealth() {
    return this.health_;

  }

  toString() {
    return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
  }
}

// 書き換えたら、記述したクラスの末尾に対して、下記の操作を追記してください。

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
