function repeat(n, action) {
	for (let i = 0; i < n; i++) {
		action(i);
	}
}

repeat(3, console.log);

// next

let labels = [];
repeat(5, i => {
	labels.push( `Unit ${i+1}`);
});
console.log(labels);
// → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"]

function greaterThan(n) {
	return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11));

// next
function noisy(f) {
	return (...args) => {
		console.log("calling with", args);
		let result = f(...args);
		console.log("called with", args, ", returned", result);
		return result;
	};
}
noisy(Math.min)(3, 2, 1);

// next
function unless(test, then) {
	if(!test) then();
}

repeat(3, n => {
	unless(n % 2 == 1, () => {
		console.log(n, "is even");
	});
});

// next
["A", "B"].forEach( l => console.log(l));

// Script data set
//
const  SCRIPTS = [{
  name: "Coptic",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "ltr",
  year: -200,
  living: false,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
},
{
  name: "Adlam",
  ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
  direction: "rtl",
  year: -200,
  living: true,
  link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
}]

// filtering Array

function filter(array, test) {
	let passed = [];
	for (let element of array) {
		if (test(element)) {
			passed.push(element);
		}
	}
	return passed;
}

console.log(filter(SCRIPTS, script => script.living));
console.log(SCRIPTS.filter(s => s.direction == "ltr"));

// transforming with map\

function map(array, transform) {
	let mapped = [];
	for (let element of array) {
		mapped.push(transform(element));
	}
	return mapped;
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
console.log(map(rtlScripts, s => s.name));