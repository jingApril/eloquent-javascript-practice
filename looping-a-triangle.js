//var str = "#"
// Looping a triangle
for (var i = 0; i < 7; i++) {
	var str = "#"
	for (var j = 0; j < i; j++) {
		str +=  "#"
	}
	console.log(str)
}

// solution
for (let line = "#"; line.length < 8; line += "#") {
	console.log(line);
}