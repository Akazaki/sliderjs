$(function () {

	// スライダー（3秒で切り替え）
	//var timer = setInterval(slideshow, 1000);

	//対象要素を変数に格納
	var $slider = $("#slider"),
		$container = $(".slider_cont"),
		$contents = $container.children("li"),
		$firstChild = $contents.filter("li:first-child"),
		$lastChild = $contents.filter("li:last-child"),
		$childl = $contents.length,
		$childWidth = $contents.outerWidth(),
		$containerWidth = $container.outerWidth(),
		$contentsWidth = $container.children().width(),
		$sliderWidth = $slider.innerWidth();

	$("#slider").css("width", (3 * $contentsWidth));

	//$($container).append($contents.eq(0).clone().get());
	
	var loop = setInterval(function() {
    //li先頭要素のクローンを作成
    var clone = $(".slider_cont li:first").clone(true);
    //li先頭要素のマージントップにマイナスを指定しアニメーションさせる
	    $(".slider_cont li:first").animate({
		    marginLeft : -($childWidth)
		    }, {
		    duration : 500,
		    complete : function() {
		        //処理完了時に先頭要素を削除
		        $(".slider_cont li:first").remove();
		        //クローンをliの最後に追加
		        clone.clone(true).insertAfter($(".slider_cont li:last"));
		    }
	    });
	}, 1500);

	//ボタンの処理

	var _imgNum = 0;    //画像の枚数
	var _current = 0;   //現在の画像

    $($contents).each(function(){
    	$('#pagenation ul').append('<li><a href="#">●</a></li>');
    });

});