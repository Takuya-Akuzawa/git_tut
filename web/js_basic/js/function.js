// 関数

// 例題
// 「四角形の面積を計算する関数」
// 四角形の縦の長さと、横の長さを引数に渡すと、四角形の面積（縦x横）を計算して、値を返す関数をつくり、
// 作った関数を使って、高さ3m, 横幅5mの四角形の面積を求め、
// コンソールに出力する
// 単位はm^2とする。単位は出力しなくても良い
// ⇒ 3種類の方法で関数を定義してみます。

// function 命令
function getRectangle(height, width) {
    return height * width;
}
console.log(getRectangle(3, 10));

// 関数リテラルによる関数の定義
var getRectangle = function(height, width) {
    return height * width;
};
console.log(getRectangle(3, 5));


// Function コンストラクター
var getRectangle = new Function('height', 'width', 'return height * width');
console.log(getRectangle(3, 6));
