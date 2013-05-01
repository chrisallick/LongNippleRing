centerx = function() {
	$(".center-x").each(function(){
		$(this).css({
			left: $(document).width()/2-$(this).width()/2,
			opacity: 1
		});
	});
}

centery = function() {
	$(".center-y").each(function(){
		$(this).css({
			top: $(document).height()/2-$(this).height()/2,
			opacity: 1
		});
	});
}

$(document).ready(function() {
    var t = setTimeout(function(){
        $(this).scrollTop(0);
    }, 250);

	centerx();
	centery();

	$("#chain").css({
		left: $("#nipples").position().left + 50
	});

	$("#dogtag").css({
		left: $("#nipples").position().left - 25
	}).click(function(){
        $("body").animate({
        	scrollTop: 0
        }, 300);
	});

	$(window).resize(function(){
		centerx();

		$("#chain").css({
			left: $("#nipples").position().left + 50
		});

		$("#dogtag").css({
			left: $("#nipples").position().left - 25
		});
	})
});