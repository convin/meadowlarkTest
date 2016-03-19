suite('全局测试',function(){
	test('有效页面标题',function(){
		assert(document.title && document.title.match(/\s/) && document.title.toUpperCase()!== 'TODO');
	});
});