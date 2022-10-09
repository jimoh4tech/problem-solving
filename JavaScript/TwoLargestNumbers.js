let array = [1, 2, 4, 5, 6, 8, 9, 10, 3, 7];
let larger = largest = 0;
for (let i = 0; i < 10; i++) {
  let num = array[i];

	if (num > largest) {
		larger = largest;
		largest = num;
	}
	if (num > larger && num < largest) larger = num;
}
console.log(larger, largest);


