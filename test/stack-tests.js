var Stack = require('./../stack.js');

function baseConverter(base, decNum) {

	if(decNum === 0) { 
		return '0'; 
	}

	// convert the base
	digits = '0123456789ABCDEF';

	var remStack = new Stack();
	var result = '';

	while(decNum > 0) {
		var remainder = decNum % base;
		decNum = Math.floor(decNum / base);
		remStack.push(remainder);
	}

	// assemble the result
	while(!remStack.isEmpty()) {
		result += digits[remStack.pop()];
	}
	return result;
}

console.log('5 base 2 = ' + baseConverter(2,5));
console.log('6 base 2 = ' + baseConverter(2,6));
console.log('0 base 2 = ' + baseConverter(2,0));
console.log('1 base 2 = ' + baseConverter(2,1));

console.log('5 base 3 = ' + baseConverter(3,5));
console.log('6 base 3 = ' + baseConverter(3,6));
console.log('0 base 3 = ' + baseConverter(3,0));
console.log('1 base 3 = ' + baseConverter(3,1));

console.log('255 base 16 = ' + baseConverter(16,255));
console.log('102 base 16 = ' + baseConverter(16,102));
console.log('0 base 16 = ' + baseConverter(16,0));
console.log('1 base 16 = ' + baseConverter(16,1));



function towerOfHanoi(n, from, to, helper){
	if (n > 0){
		towerOfHanoi(n-1, from, helper, to);
		to.push(from.pop());
		console.log('-----')
		console.log('Source: ' + source.toString());
		console.log('Dest: ' + dest.toString());
		console.log('Helper: ' + helper1.toString());
		towerOfHanoi(n-1, helper, to, from);
	}
}
var source = new Stack();
source.push(5);
source.push(4);
source.push(3);
source.push(2);
source.push(1);
var dest = new Stack();
var helper1 = new Stack();
towerOfHanoi(5, source, dest, helper1);

