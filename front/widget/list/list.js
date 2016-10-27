var Tip = require('front:widget/common/tip/tip.js');

module.exports = Widget.extend({
	init: function () {
		$('.btn', this.el).on('click', function () {
			Tip.message('button clicked!', 'success');
		});
	}
});