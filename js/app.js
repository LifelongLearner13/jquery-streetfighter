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
		// play hadouken sound and show hadouken and animate to the right
		$(".ryu-character").hide();
		$(".ryu-throwing").show();
		$(".hadouken").show();
	})

	.mouseup(function() {
		// ryu goes back to ready
		$(".ryu-character").hide();
		$(".ryu-ready").show();
	})
	});
