$(document).ready(function() {
	$(".ryu").mouseenter(function() {
		$(".ryu-character").hide();
		$(".ryu-ready").show();
	})

	.mouseleave(function() {
		$(".ryu-character").hide();
		$(".ryu-still").show();
	})

	.mousedown(function() {
		playHadouken();
		$(".ryu-character").hide();
		$(".ryu-throwing").show();
		$(".hadouken").finish().show()
		.animate(
			{'left': '1102px'},
			500, 
			function() {
				$(this).hide();
				$(this).css('left', '602px');
			}
		);
	})

	.mouseup(function() {
		// ryu goes back to ready
		$(".ryu-character").hide();
		$(".ryu-ready").show();
	});

	$("body").keydown(function(event){
		if ( event.keyCode == 88 ) {
			$(".ryu-character").hide();
			$(".ryu-cool").show();
		}
	})

	.keyup(function(event){
		if (event.keyCode == 88){
			$(".ryu-character").hide();
			$(".ryu-still").show();
		}
	});
});

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play(); 
}
