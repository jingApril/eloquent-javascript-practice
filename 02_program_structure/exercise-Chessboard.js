for (let n = 0; n <8; n++) {
  let str = "";
	if(n%2 == 0) {
		for (let m = 0; m <8; m++) {
				if( m%2 == 0 ) {
					 str += " ";
				} else {
					str += "#";
				}
		}
	} else {
		for (let m = 0; m <8; m++) {
				if( m%2 == 0 ) {
					 str += "#";
				} else {
					str += " ";
				}
		}
	}
	console.log(str)
}

// ssolution

let size = 8;
let board = "";
for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);