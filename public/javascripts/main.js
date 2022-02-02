$(".open_a").click(function () {
	$(this).addClass("open_a_active");
	$(".panel_a").addClass("panel_a_active");
});

$(".open_a_active").click(function () {
	$(this).removeClass("open_a_active");
	$(".panel_a").removeClass("panel_a_active");
});
