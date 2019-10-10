
(function( $ ) {
	$(function() {
		$( "#stop" ).click(function() {
			$( "#animated" ).addClass( "off" );
		});
		$( "#start" ).click(function() {
			$( "#animated" ).removeClass( "off" );
		});
	});

})( jQuery );

$('.runButton').$(function () {
    $("#devant").animate({"animation-play-state","running" }
           }, { duration: 200, queue: false });

    $("#second").animate({
       width: '600px'
    }, { duration: 200, queue: false });
});

$("#test").playKeyframe({
    name: 'myfirst',
    duration: 2000
});