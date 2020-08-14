const numbers = [3, 4, 5, 6, 7, 8];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     // const square = element * element;
//     // output.push(square);
// }
// console.log(output);

const squareByArray = numbers.map(x => x * x);
console.log(squareByArray);



// const result = numbers.map(function(element){
//     return element;
// })
// console.log(result);



// const squareResult = numbers.map(function(element){
//     return element * element;
// })
// console.log(squareResult);



// const squareByArray = numbers.map(element => element * element);
// console.log(squareByArray);

const digits = [3, 4, 5, 6, 7, 8];
// for (let i = 0; i < digits.length; i++) {
//     const element = digits[i];  
// }
const bigger = digits.map(x => x > 5);
console.log(bigger);

const biggerDigits = digits.filter(x => x > 5);
console.log(biggerDigits);

const isThere = digits.find(x => x > 5);
console.log(isThere);

