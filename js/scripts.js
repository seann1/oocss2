
$(document).ready(function() {
		$(".stop").click(function() {
			$(".full-width").css("-webkit-animation-play-state", "paused");

		});

		$(".start").click(function() {
			$(".full-width").css("-webkit-animation-play-state", "running");
		});

		$(".change-animation").click(function() {
			$(".full-width").removeClass("animation");
			$(".full-width").addClass("spin");
		});

		$(".search").click(function() {
			$(".search").animate({ width: "200px" }, 500);
			$(".search-close").animate({ backgroundcolor: "#000000" }, 500);
		});

		$(".search-close").click(function() {
			$(".search").animate({ width: "30px" }, 500);
			$(this).animate({rotate : "360deg"}, 1000);
		});

});
