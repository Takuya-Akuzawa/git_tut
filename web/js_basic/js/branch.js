// 条件分岐

// if / else
// 例題
// 変数xを宣言すると同時に整数を代入
// 変数xの値が、100以上だったら、'100以上の値です'とコンソールに表示。
// 変数xが100未満だったら、'100未満の値です'とコンソールに表示
var x = 99;
if (x >= 100) {
    console.log('100以上の値です。');
} else {
    console.log('100未満の値です。');
}

// >= のところは、比較演算子といいます。
// 主な比較演算子
// https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators
// == 等しい
// === 厳密に等しい (基本的にはこちらを使う)

// if / else if / else
// 例題
// テストの点数yによって、通知表の成績をコンソールに出力するプログラム
// 90点以上 A
// 80点以上 B
// 60点以上 C
// 60点未満 D
var y = 80;
if (y >= 90) {
    console.log('A');
} else if (y >= 80) {
    console.log('B');
} else if (y >= 60) {
    console.log('C');
} else {
    console.log('D');
}


// switch
// 例題変数nの値が1だったら、「数値は1です」とコンソールに表示。
// 例題変数nの値が2だったら、「数値は2です」とコンソールに表示。
// 例題変数nの値が3だったら、「数値は3です」とコンソールに表示。
// 例題変数nの値が上記以外だったら、「範囲外です」とコンソールに表示
var n = 2;
switch (n) {
    case 1:
        console.log('数値は1です');
        break;
    case 2:
        console.log('数値は2です');
        break;
    case 3:
        console.log('数値は3です');
        break;
    default:
        console.log('範囲外です');
        break;
}