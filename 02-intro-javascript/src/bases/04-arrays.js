const arrayOne = [1, 2, 3, 4];
const arrayTwo = [ ...arrayOne, 5, 6, 7, 8 ];
const arrayThree = arrayTwo.map((item) => item * 2); 

arrayOne.push(6);

console.log('arrayOne', arrayOne);
console.log('arrayTwo', arrayTwo);
console.log('arrayThree', arrayThree);