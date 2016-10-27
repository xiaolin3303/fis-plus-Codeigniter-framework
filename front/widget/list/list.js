module.exports = Widget.extend({
	init: function () {
		$('.btn', this.el).on('click', function () {
			alert('button clicked!')
		});
	}
});