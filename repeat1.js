function repeat(n, action) {
	for (let i = 0;  i < n; i ++) {
		action(i);
	}
}
 function noisy(f) {
 	return (...args) => {
 		console.log("calling with", args);
 		let result = f(...args);
 		console.log("called with", args, ", returned", result);
 		return result;
 	};
 }

 noisy(Math.min)(3, 2, 1);