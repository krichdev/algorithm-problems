//recursion
var arr = [1, 2, [3, 4, [5, 6, [7], 8, [9, 10], [], 11], 12], [13, 14, [15, 16, [17, [18, [19, [20]]]]]]];

function flattenNestedArray(input){
	var result = [];
	for (var i = 0; i < input.length; i++) {
		if(Array.isArray(input[i])){
			result = result.concat(flattenNestedArray(input[i]));
		} else {
			result.push(input[i]);
		}
	
	return result;
}

console.log(flattenNestedArray(arr));