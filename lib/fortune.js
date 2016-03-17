var fortunes = ['coo1','coo2','coo3','coo4'];

exports.getFortune = function(){
	var idx = Math.floor(Math.random()*fortunes.length);
	return fortunes[idx];
};