function graphPi(numDataPoints, ctx){
	var xAxis = [];
	var yAxis = [];
	for(var i = 1; i<=numDataPoints; i++){
		xAxis.push(i);
		yAxis.push(getNthPi(i));
	}
	var data = {
	    labels: xAxis,
	    datasets: [
	        {
	            label: "Digit of pi",
	            fillColor: "rgba(226, 106, 106,0.2)",
	            strokeColor: "rgba(226, 106, 106,1)",
	            pointColor: "rgba(151,187,205,1)",
	            pointStrokeColor: "#4183D7",
	            pointHighlightFill: "#4183D7",
	            pointHighlightStroke: "rgba(151,187,205,1)",
	            data: yAxis
	        }, 
	        {
	            label: "Best fit",
	            fillColor: "rgba(226, 106, 106,0.0)",
	            strokeColor: "rgba(226, 106, 106,1)",
	            pointColor: "rgba(220,220,220,1)",
	            pointStrokeColor: "#4183D7",
	            pointHighlightFill: "#4183D7",
	            pointHighlightStroke: "rgba(220,220,220,1)",
	            data: bestFit(xAxis, yAxis)[1]
	        }
	    ]
	};
	var options = {
		bezierCurve : true
	};
	var myLineChart = new Chart(ctx).Line(data, options);
}
function getNthPi(n){
	return parseInt(PI_FINAL[n])
}
var PI_FINAL = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679"

