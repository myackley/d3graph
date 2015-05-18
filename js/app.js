var graph = d3.select('#graph').append('svg').attr('id','svg-graph');

d3.json('data.json', function(error, data) {

	console.log(data);
	console.log(error);
});

