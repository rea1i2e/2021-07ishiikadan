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


AOS.init({
  offset: 100,
    // アニメーションの開始位置（トリガーの元の位置より100px下に設定）
    // offset (in px) from the original trigger point    
    
    delay: 0, 
    // 遅延 values from 0 to 3000, with step 50ms
    
    duration: 3000, 
    // アニメーションにかける時間（1000ミリ秒かける）
    // values from 0 to 3000, with step 50ms

    easing: 'ease', 
    // アニメーションの仕方　default easing for AOS animations
    
    once: true, 
    // trueにすると、1回だけ実行され、falseだとずっと実行される
    // whether animation should happen only once - while scrolling down
    
    mirror: false, 
    // 要素をスクロールしながら、アニメーション化する必要があるかどうか
    // whether elements should animate out while scrolling past them
    
    anchorPlacement: 'top-bottom', 
    // アニメーション開始のスクロール位置
    // defines which position of the element regarding to window should trigger the animation
});