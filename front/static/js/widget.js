;(function(window) {
	function Widget () {
	}

	Widget.prototype.create = function (selector, data) {
		this.data = data;
		this.el = $(selector);
		this.init();
	}
	Widget.prototype.init = function () {
		throw new Error ('widget must implement "init" function');
	}

	Widget.prototype.extend = function (proto) {
		function F () {};
		F.prototype = Widget.prototype;
		function Child () {
			Widget.apply(this, arguments);
		};
		Child.prototype = new F();

		Child.prototype = $.extend(Child.prototype, proto);
		return new Child();
	}

	window.Widget = new Widget();
})(this)