var Tip = require('front:widget/common/tip/tip.js');

module.exports = Widget.extend({
	init: function () {
		var data = this.data;
		$('.btn', this.el).on('click', function () {
			Tip.message(data.msg, 'success');
		});
	}
});