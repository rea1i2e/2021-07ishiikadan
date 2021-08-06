$(function () {

  // scrollイベントを取得した際の処理を定義
  $(window).on("scroll", function () {
    // scrollTop()が0より大きい場合
    if ($(this).scrollTop() > 0) {
      // ヘッダーバーをslideDownして表示
      $(".second-header").slideDown();
    // scrollTop()が0の場合
    } else {
      // ヘッダーバーをslideUpして非表示
      $(".second-header").slideUp();
    }
  });

  // 予約モーダル
  $('.reserve-btn').click(function(){
    $('#modal-wrapper').fadeIn()
  });
  
  // 予約モーダルを閉じる
  $('#close').click(function(){
    $('#modal-wrapper').fadeOut()
  });

  // タブメニュー

  // ①タブをクリックしたら発動
  $('.tab li').click(function() {
 
    // ②クリックされたタブの順番を変数に格納
    var index = $('.tab li').index(this);
 
    // ③クリック済みタブのデザインを設定したcssのクラスを一旦削除
    $('.tab li').removeClass('active-tab');
 
    // ④クリックされたタブにクリック済みデザインを適用する
    $(this).addClass('active-tab');
 
    // ⑤コンテンツを一旦非表示にし、クリックされた順番のコンテンツのみを表示
    $('.area dl').removeClass('show').eq(index).addClass('show');
  });

});