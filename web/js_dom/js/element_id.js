// IDをキーに要素を取得
// getElementByIdメソッド

// 現在のid:resultの内容（テキスト）をコンソールに表示。
// id:resultの内容（テキスト）を、現在時刻（日時）に書き換え。
function show() {
    var result = document.getElementById('result');
    console.log(result.innerText);
    // innterTextプロパティでテキストのみ取得
    console.log(result); //resultだけだとidに合致するタグ開始〜終了が表示される。
    var nowDate = new Date();
    result.innerText = nowDate.toLocaleString();
}