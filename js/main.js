$(function () {

	// スライダー（3秒で切り替え）
	//var timer = setInterval(slideshow, 1000);

	//$($container).append($contents.eq(0).clone().get());
	
	/*var loop = setInterval(function() {
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
	}, 1500);*/

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

	//スライダー三枚表示
	$("#slider").css("width", (3 * $contentsWidth));

	var _imgNum = 0;    //画像の枚数
	var _current = 0;   //現在の画像
	var _timer = 3000;  //タイマー時間

	//画像の数だけボタン設置
    $($contents).each(function(){
    	if (_imgNum == _current) {
	    	$('#pagenation ul').append('<li class="active"><a href="#">●</a></li>');
	    } else {
        	$('#pagenation ul').append('<li><a href="#">●</a></li>');
   		}
    //ループの数をカウントして_imgNumに入れる
    _imgNum++;
    console.log(_imgNum);
    });

    //一定時間ごとにimageMoveを実行
    var loopSwitch = setInterval(loop, _timer);

    function loop() {
        imageMove(_current +1);
    }

    //ページネーションクリック
	$('#pagenation ul li').click(function() {
	    var thisNum = $('#pagenation li').index(this);
	    //押したボタンが現在の画像じゃなかったら実行
	    if(thisNum != _current) {
	        imageMove(thisNum);
	    }
	    console.log(thisNum);
	});

	function imageMove(next) {
        //ループ時間リセット
        clearInterval(loopSwitch);
        loopSwitch = setInterval(loop, _timer);
        //次の画像が次の画像より多きかったら右に配置（小さかったら左）
        var pos;
        if (_current < next) {
            pos = -($childWidth);
        } else {
            pos = ($childWidth);
        }
         
        //次の画像が最後なら1枚目、１枚目なら最後
        if (next == $childWidth) {
            next = 0;
        } else if(next == -1) {
            next = ($childWidth-1);
        }

		$(".slider_cont li").eq(next)
		.css("margin-left", -pos)
		.animate({marginLeft: "0"},"fast");

		$(".slider_cont li").eq(_current)
		.animate({marginLeft: pos},"fast");

		$('#pagenation li').eq(_current).removeClass('active');
		$('#pagenation li').eq(next).addClass('active');
		_current = next;
	}


});