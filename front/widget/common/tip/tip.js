var style = __inline('./tip.inline.less');
/*ignore jslint start*/
var tpl = __inline('./tip.tmpl');
/*ignore jslint end*/
var element = null;
var timeId = null;
var delay = 2000;

require.loadCss({
    name: 'usersys-widget-tip-style',
    content: style
});


module.exports = {
	message: function (msg, type) {
		type = type ? type : 'success';

		this.render();
		var target = $('span', element);
		target.removeClass().addClass(type);
		target.find('em').text(msg);
		element.show();

		if (timeId) {
			clearTimeout(timeId);
		}

		timeId = setTimeout(function () {
			element.fadeOut();
		}, delay);
	},

	render: function () {
		if (!element) {
			element = $(tpl());
			$('body').append(element);
		}
	}
};