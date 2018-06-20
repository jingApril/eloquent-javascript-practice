
var di3 = "Fizz";
var di5 = "Buzz";
var di3di5 = "FizzBuzz";
var str = "";
for (var i = 1; i <= 100; i++) {
	if( i%3 == 0 && i%5 !== 0) {
		str = di3;
		console.log(str);
	} else if (i%5 == 0 && i%3 !== 0) {
		str = di5;
	  console.log(str);
	} else if (i%3 == 0 && i%5 == 0 ) {
		str = di3di5;
	  console.log(str);
	} else {
		 console.log(i);
	}
}


// solution
for (let n = 1; n <= 100; n ++) {
	let output = "";
	if (n % 3 == 0) output += "Fizz";
	if (n % 5 == 0) output += "Buzz";
	console.log(output || n);
}