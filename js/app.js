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
			{'left': '1452px'},
			750, 
			function() {
				$(this).hide();
				$(this).css('left', '602px');
			}
		);
	})

	.mouseup(function() {
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

	$(".ryu-angry").mouseenter(function() {
		$(".ryu-character-angry").hide();
		$(".ryu-ready-angry").show();
	})

	.mouseleave(function() {
		$(".ryu-character-angry").hide();
		$(".ryu-still-angry").show();
	})

	.mousedown(function() {
		playHadouken();
		$(".ryu-character-angry").hide();
		$(".ryu-throwing-angry").show();
		$(".hadouken-angry").finish().show()
		.animate(
			{'right': '1367px'},
			750, 
			function() {
				$(this).hide();
				$(this).css('right', '517px');
			}
		);
	})

	.mouseup(function() {
		$(".ryu-character-angry").hide();
		$(".ryu-ready-angry").show();
	});

	$("body").keydown(function(event){
		if (event.keyCode == 90) {
			$(".ryu-character-angry").hide();
			$(".ryu-cool-angry").show();
		}
	})

	.keyup(function(event){
		if (event.keyCode == 90){
			$(".ryu-character-angry").hide();
			$(".ryu-still-angry").show();
		}
	});
});

function playHadouken() {
	$("#hadouken-sound")[0].volume = 0.5;
	$("#hadouken-sound")[0].load();
	$("#hadouken-sound")[0].play(); 
}
