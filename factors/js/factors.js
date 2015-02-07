function graphFactors(){
	var numDataPoints = 12;
	var xAxis = [];
	var yAxis = [];
	for(var i = 0; i<50; i++){
		xAxis.push(i);
		yAxis.push(numFactors(i));
	}
	var data = {
	    labels: xAxis,
	    datasets: [
	        {
	            label: "Number of factors.",
	            fillColor: "rgba(151,187,205,0.2)",
	            strokeColor: "rgba(151,187,205,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#fff",
	            pointHighlightFill: "#fff",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: yAxis
	        }
	    ]
	};
	var options = {
		bezierCurve : true
	};
	var myLineChart = new Chart(ctx).Line(data, options);
}
function numFactors(num){
	var numFactors = 0;
	for(var i = 2; i<Math.floor(Math.sqrt(num)+1); i++)
		if(num%i == 0)
			numFactors+=2;
	return numFactors;
}