// まず関数を設定、中に処理内容を書く
// functionの次に入れているのが引数
// returnの後は戻り値
// $('セレクタ').css({
//   'プロパティ1': '値1',
//   'プロパティ2': '値2',
//   'プロパティn': '値n'
// });

// 今回はbodyとhtml全体に設定しているということかも（？）
// scrollllTopへのanimateかな

// $('.セレクタ名').イベント名(function(){
//   イベント発生時に行われる処理
// });

// 今回はイベント名click
// それをしたら何が起きるかを,の後に書いている


$(function(){

  $('#back a').on('click',function(){
    $('body,html').animate({
      scrollTop:0
    },2000);
    return faluse;
  });

});