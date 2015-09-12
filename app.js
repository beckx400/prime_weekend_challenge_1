var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

function claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

var claim6 = new claim("Walker Dalton", "Primary Care", 800);
var claim7 = new claim("Myles Jeffery", "Emergency", 1200);
var claim8 = new claim("Brynn Kelvin", "Optical", 150);
var claim9 = new claim("Rene Arleen", "Specialist", 1000);
var claim10 = new claim("Astor Quinn", "Emergency", 1500);

var intialArray = [claim1, claim2, claim3, claim4, claim5];
var secondaryArray= [claim6, claim7, claim8, claim9, claim10];
var combinedArray = intialArray.concat(secondaryArray);

var totalPayedOut = 0;

for(var i = 0; i < combinedArray.length; i++){
	var percentCovered = determinePercentCovered(combinedArray[i]);
	determineAmountCovered(combinedArray[i], percentCovered);
}
//function to determine percent covered
function determinePercentCovered(object){
	switch(object.visitType){
		case ("Optical"):
			return 0;
			break;
		case ("Specialist"):
			return 0.10;
			break;
		case ("Emergency"):
			return 1;
			break;
		case ("Primary Care"):
			return 0.50;
			break;
		default:
			console.log("Not covered.");
	}
}
//function to determine amount covered
function determineAmountCovered(object, percent){
	var amountCovered = Math.round(percent * object.visitCost);
	var patientName = object.patientName;
	totalPayedOut += amountCovered;
	console.log("Paid out $" + amountCovered + " for " + patientName + ".");
}

console.log("The total amount payed out equals $" + totalPayedOut + "!");





