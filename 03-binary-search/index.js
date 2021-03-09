function binarySearch(array, numberToFind) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		let middle = Math.floor((start + end) / 2);

		if (array[middle] === numberToFind) {
            console.log(`${numberToFind} is found at position ${middle}`);
			return middle;
		} else if (array[middle] < numberToFind) {
			start = middle + 1;
		} else {
			end = middle - 1;
		}
	}
    console.log(`${numberToFind} not found`);
	return -1;
}

let numbers = [2, 6, 8, 9, 10];

binarySearch(numbers, 10);
binarySearch(numbers, 2);
binarySearch(numbers, 10000);
binarySearch(numbers, 20);
