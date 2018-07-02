//  function is called for its side effect: it prints a line.
function printZeroPaddedWithLabel(nmber, label) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" +numberString;
	}
	console.log(`${numberString} ${label}`);
}

// function is called for its return value.

function printFarmInventory(cows, chickens, pigs) {
		printZeroPaddedWithLabel(cows, "Cows");
		printZeroPaddedWithLabel(chickens, "Chickens");
		printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);


function zeroPad(number, width) {
	let string = String(number);
	while (string.length < width) {
		string = "0" + string;
	}
	return string;
}

function printFarmInventory(cows, chickens, pigs) {
	console.log(`${zeroPad(cows, 3)} Cows`);
	console.log(`${zeroPad(chickens, 3)} Chickens`);
	console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);