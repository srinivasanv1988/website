// the carousel
var $carousel = null;

//	the draggable wrapper
var $wrapper = null;

//	the width of one item
var itemWidth = 300;

//	the duration of the scrolling
var scrollDuration = 600;

//	dragging-engine
var startDragPosition = false;
function startDrag( event ) {
	event.preventDefault();

	if ( $carousel.triggerHandler( 'isScrolling' ) ) {
		startDragPosition = false;
		return;
	}
	startDragPosition = event.pageX;
	$wrapper.bind(
		'mousemove',
		function( e ) {
			$wrapper.css({
				'marginLeft': -(itemWidth + startDragPosition - e.pageX)
			});
		}
	);
}
function stopDrag( event ) {
	event.preventDefault();
	$wrapper.unbind('mousemove');

	if ( startDragPosition ) {
		var currentDragPosition = event.pageX;
		var direction = false;
		if ( startDragPosition < currentDragPosition ) {
			direction = 'prev';
		} else if ( startDragPosition > currentDragPosition ) {
			direction = 'next';
		}
		// if ( direction ) {
		// 	$carousel.trigger( direction );
		// 	$wrapper.animate({
		// 		'marginLeft': -itemWidth
		// 	}, scrollDuration);
		// }
		if ( direction == 'prev') {
			$carousel.trigger( direction );
			// $wrapper.animate({
			// 	'marginLeft': -itemWidth
			// }, scrollDuration);
		}
		if ( direction == 'next') {
			$carousel.trigger( direction );
			// $wrapper.animate({
			// 	'marginLeft': -itemWidth
			// }, scrollDuration);
		}
	}
	startDragPosition = false;
}

$(function() {

	//	the carousel
	$carousel = $('#home-slider');
	$carousel.carouFredSel({
		width: 300 * 12,
		height: 'variable',
		align: false,
		items: {
			visible: 4,
			start: -1
		},
		scroll: {
			items: 1,
			duration: scrollDuration
		},
		auto: false
	});

	//	make the wrapper draggable
	$wrapper = $carousel.parent();
	$wrapper.css({
		'cursor': 'move',
		'marginLeft': -itemWidth
	});
	$wrapper.bind('mousedown', startDrag)
	$wrapper.bind('mouseup', stopDrag)
	$wrapper.bind('mouseleave', stopDrag);
});
