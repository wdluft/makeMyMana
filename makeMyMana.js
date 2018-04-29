// HOW MANY LANDS DO YOU NEED
var landsNeeded = 23;

// HOW MANY OF EACH COLOR PIPS DO YOU HAVE
// ARRAY IS IN WUBRG ORDER
var colorPips = [0, 0, 27, 0, 14];

// TOTAL PIPS
// var totalPips = whitePips + bluePips + blackPips + redPips + greenPips;
var totalPips = 0;

getTotalPips(colorPips);

function getTotalPips(arr){
	for(var i = 0; i < arr.length; i++){
		totalPips += arr[i];
	}
}

// RATIO FOR EACH COLOR
var numLands = [];

landRatio();

function landRatio(){
	for(var i = 0; i < colorPips.length; i++){
		numLands.push(Math.round((colorPips[i] / totalPips) * landsNeeded));
		$(".colorsNeeded").append("<li>" + numLands[i] + "</li>")
	}
}

var howManyLands = new Object();

howManyLands.plains    = numLands[0];
howManyLands.islands   = numLands[1];
howManyLands.swamps    = numLands[2];
howManyLands.mountains = numLands[3];
howManyLands.forests   = numLands[4];

console.log(howManyLands);