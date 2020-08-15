const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

const removed = nums.splice(2,3, 11, 22, 33, 44, 55, 66);
console.log(removed);
console.log(nums);

const together = nums.join("");
console.log(together);

const together2 = nums.join(" ");
console.log(together2);

const together3 = nums.join("ami");
console.log(together3);

const together4 = nums.join(",");
console.log(together4);
