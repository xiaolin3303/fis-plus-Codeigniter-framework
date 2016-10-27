var Util = require('../widget/utils/util.js');
var expect = require('chai').expect;

describe('isPhone validator in util', function() {
	it('15809876543 should be a valid phone number', function() {
		expect(Util.isPhone('15809876543')).to.be.ok;
	});
	it('1580987654 should not be a valid phone number', function() {
		expect(Util.isPhone('1580987654')).to.be.not.ok;
	});
	it('25809876543 should not be a valid phone number', function() {
		expect(Util.isPhone('25809876543')).to.be.not.ok;
	});
});