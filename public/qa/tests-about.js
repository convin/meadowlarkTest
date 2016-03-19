suite('关于我们测试',function(){
	test('页面应该存在链接跳转到联系页',function(){
		assert($('a[href="/contact"]').length);
	});
});