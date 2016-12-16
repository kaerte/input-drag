(function($){
	$.fn.inputDrag = function(options) {
		var settings = $.extend({
			min: 0,
			max: 280
		}, options );

		var isDown = 0,
			el = $(this),
			_xStart = 0;

		el.mousedown(function(e) {
			isDown = 1;
			e.preventDefault()
			var _x = event.clientX - el.val();
			_xStart = _x;
		});
		$(document).mouseup(function(e) {
			isDown = 0;
		});
		$(document).mousemove(function(e) {
			if(!isDown) {
				return;
			}
			var _x = event.clientX;
			if(_x) {
				var _xDiff = _x - _xStart;
			}
			if(_xDiff < settings.min) {
				_xDiff = settings.min;
			}
			if( _xDiff > settings.max) {
				_xDiff = settings.max;
			} 
			if (isDown == 1 && (_xDiff >= settings.min && _xDiff <= settings.max))
			{
				el.val(_xDiff);
				el.trigger("input");
			}		
		});
	};
}(jQuery));