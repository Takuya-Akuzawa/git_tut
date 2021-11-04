// インクリメントとデクリメント

// 「インクリメント x++, ++x」
// 値に1を足す
// x++ ⇔ x = x + 1;
//
// 「デクリメント x--, --x」
// 値から1を引く
// x-- ⇔ x = x - 1;
//
// 後置演算子 と 前置演算子
// 「後置演算子」
// 変数yに変数xを代入してから、変数xをインクリメント
// y = x++;
// ↓式を分けて書くと下記になります
// y = x;
// x =  x + 1;
//
// 「前置演算子」
// 変数ｘをインクリメントしてから、その結果をを変数yに代入。
// 式を分けて書くと、
// y = ++x;
// ↓式を分けて書くと下記になります
// x = x + 1;
// y = x;

// note : 実務上は後置演算の方が見かける頻度が高いと思います。

// 後置演算
var x = 10;
var y = x++;
console.log(x);
console.log(y);

// // 前置演算
var i = 10;
var j = ++i;
console.log(i);
console.log(j);
