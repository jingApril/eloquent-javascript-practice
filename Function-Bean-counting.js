function countBs(str) {
	var number = 0;
  for (var i = 0; i < str.length; i++) {
  	console.log(str[i])
  	if(str[i] == "B") {
      number += 1;
  	}
  }
  return number;
}

function countChar(str, k) {
 	var number = 0;
  for (var i = 0; i < str.length; i++) {
  	console.log(str[i])
  	if(str[i] == k) {
      number += 1;
  	}
  }
  return number;
}


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


// better solution
function countChar(string,ch) {
	let counted = 0;
	for (let i = 0; i < string.length; i++) {
		if (string[i] == ch) {
			counted += 1;
		}
	}
	return counted;
}

function countBs(string) {
	return countChar(string, "B");
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4