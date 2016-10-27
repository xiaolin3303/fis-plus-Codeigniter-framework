module.exports = {
	isPhone: function (phone) {
		return /1\d{10}/.test(phone);
	}
}