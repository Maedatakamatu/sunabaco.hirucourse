$(function () { // ここはお約束



  ////////////////////////////
  // ここからプラグイン用の記述 //
  ///////////////////////////
  // 課題7解答 

  // チャットを追加する機能
  function addChat(chatText) {
    var chatContent = '<p class="chatContent">' + chatText + '</p>'
    $("#chatBox").append(chatContent);
  }

  // "送信する" というボタンが押されたときに
  $("#addChat").on("click", function (e) {

    // イベントをキャンセルしてページ最上部への移動を防ぐ
    e.preventDefault();

    // 入力フォームの値を取得
    var chatText = $("#chatForm").val();

    // 入力されたテキスト何も無い or 半角・全角スペースのみだった場合
    if (chatText.match(/^[ 　\r\n\t]*$/)) { // 参考サイト https://techmemo.biz/javascript/form-spaceonly-denial/
      // 正規表現 で検索してみよう！ 
      console.log("何か入力してください")
    }
    // テキストのみが正しく入力された場合
    else {
      addChat(chatText);
      $("#chatWrap").scrollTop($("#chatWrap")[0].scrollHeight); // 参考サイト http://www.koikikukan.com/archives/2014/10/30-013333.php

      // 送信されたら入力されたテキストを空欄にする
      $("#chatForm").val(""); // 参考サイト https://code-examples-ja.hateblo.jp/entry/2014/07/18/jQuery_%7C_%E3%83%86%E3%82%AD%E3%82%B9%E3%83%88%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%81%AB%E5%85%A5%E3%82%8C%E3%81%9F%E5%80%A4%E3%82%92%E3%82%AF%E3%83%AA%E3%82%A2%E3%81%99%E3%82%8B
    }
  });


});

// スライドイン
// $(window).fadeThis();