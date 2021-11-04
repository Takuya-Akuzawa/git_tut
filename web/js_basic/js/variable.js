// 変数
// データを一時的に保存できる入れもの

// 変数の宣言
// var 変数名 [=初期値]...

// 変数xを宣言
var x;

// 複数の変数i, jを宣言
var i, j;

// 宣言時に初期値をセットできる
var str = 'はじめてのJavaScript';
var str = "はじめてのJavaScript";

var k = 100;

// 命名規則
// 1文字目は、英字 or アンダースコア or ＄記号
var name;
var _name;
var $name

// 2文字目以降は、1文字目で使える文字 or 数字
var name1;
var _name1;

// 大文字と小文字は区別される
var foo;
var Foo;

// 予約語は使用できない
// var, for 

// 例題
// 変数colorNameを宣言すると同時位初期値 'blue'を設定
// 変数colorNameの値をコンソールに出力する
var colorName = 'blue';
console.log(colorName);
