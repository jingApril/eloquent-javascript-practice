// wrong
function isEven(n) {
	if(n%2 == 0) {
		return true;
	} else {
		return (false || isEven(n-2));
	}
}

// solution
function isEven(n) {
	if (n==0) return true;
	else if (n == 1)  return false;
	else if (n < 0)  return isEven(-n);
	else return isEven(n-2);
}