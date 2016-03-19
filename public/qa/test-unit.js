var fortune = require('../lib/fortune.js');
var expect = require('chai').expect;

suite('幸运饼干测试',function(){
	test('getFortune() 应该返回生成一块饼干',function(){
		expect(typeof fortune.getFortune() === 'string');
	});
});