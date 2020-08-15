function stopWatch(){
    let counter = 0;
    return function(){
        counter ++;
        return counter;
    }
}
const clock = stopWatch();
const clock1 = stopWatch();


console.log(clock());
console.log(clock());
console.log(clock());
console.log(clock());

console.log(clock1());
console.log(clock1());