// INITIALIZE VARIABLES
var landsNeeded = 23;
var colorPips   = [];
var totalPips   = 0;
var numLands    = [];

$(".btn").click(function(event){

	// GET LAND COUNT AND COLOR PIP COUNT
	landsNeeded = Number($("#landCount").val());
	colorPips.push(Number($("#whitePips").val()));
	colorPips.push(Number($("#bluePips").val()));
	colorPips.push(Number($("#blackPips").val()));
	colorPips.push(Number($("#redPips").val()));
	colorPips.push(Number($("#greenPips").val()));
	console.log("lands needed: " + landsNeeded);
	console.log("how many of each color");
	console.log(colorPips);

	// TOTAL PIPS
	getTotalPips(colorPips);
	console.log("total pips: " + totalPips);

	// RATIO FOR EACH COLOR
	landRatio(landsNeeded);

	event.preventDefault();
});


// ===================
// FUNCTIONS
function getTotalPips(arr){
	for(var i = 0; i < arr.length; i++){
		totalPips += arr[i];
	};
};

function landRatio(totalLands){
	console.log("landRatio function is running");
	for(var i = 0; i < colorPips.length; i++){
		numLands.push(Math.round((colorPips[i] / totalPips) * totalLands));
		$(".colorsNeeded").append("<li>" + numLands[i] + "</li>");
	};
};
