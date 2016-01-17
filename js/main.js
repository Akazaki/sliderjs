$(function(){
	//動かす画像の数
	var li_move = 1;
	//prev,nextボタン追加
	$(".slider_cont").append('<div id="prev" class="hide">◀︎</div><div id="next" class="show">▶︎</div>');
	//画像
	var slideLi = $(".slider_cont").children("li");
	//画像一枚のwidth
	var liWidth = $(slideLi).outerWidth();
	//画像一枚のheight
	var liHeight = $(slideLi).outerHeight();
	//画像の数
	var li_length = $(slideLi).length;
	//画像3枚分表示
	$(".slider_cont").css("width", ((li_length) * (liWidth)));
	$("#slider").css("width", (3 * (liWidth)));
	$(".slider_cont").css("height", (liHeight));
	// カルーセルパネルの幅を取得
    var ulWidth = $(".slider_cont").width();
    //#sliderのwidth
    var sliderWidth = $("#slider").width();
    console.log(slideLi);

    $('#prev').click(function(){
    	// prevをクリックしたときにclass=hideが指定されていなければ、以下を実行
        if($(this).attr("class") != "hide") {
			$('.slider_cont:not(:animated)').animate(
				{left:'+='+liWidth*li_move},
                300,
                function(){
                    // アニメーションが完了したらulのposition-leftの位置を取得
                    var ul_pos = boxPosition(".slider_cont","left");
                    // nextのclassを「show」に書き換え
                    $('#next').attr("class","show");
                    // ulのposition-leftが0の場合、prevのclassを「hide」に書き換え
                    if(ul_pos === 0) {
                        $('#prev').attr("class","hide");
                    }
                }
	        );
		}
	});

	$('#next').click(function(){
		imageMove();
	});

	// nextをクリックしたときにclass=hideが指定されていなければ、以下を実行（以下略）
	function imageMove(){
		if($(this).attr("class") != "hide") {
			$('.slider_cont:not(:animated)').animate(
				{left:'-='+liWidth*li_move},
				300,
				function(){
					var ul_pos = boxPosition(".slider_cont","left");
					$('#prev').attr("class","show");
					//今表示されてる画像+残りの画像まで行けばnextをhideに
					if(ul_pos === (-ulWidth + sliderWidth)) {
						$('#next').attr("class","hide");
						clearInterval(loopSwitch);
					}
				}
			);
		}
	}

	//一定時間でimageMoveを実行
	var loopSwitch = setInterval(loop, 4000);
    function loop() {
        imageMove();
    }

	//setInterval("nextmove()",500);

	function boxPosition(ele,pos) {
	 	// 指定されたエレメントのpositionの各値を取得
		var position = $(ele).position();
		// 指定された位置の値をリターン
		return position[pos];
	}
});



