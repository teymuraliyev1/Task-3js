let numbers = [44, 1, 17, 92, 84, 165, 200, 5];

let sum = 0;

numbers.forEach(num => {
  if (num % 2 === 0) {
    sum += num;
  }
});

console.log("Sum of even numbers", sum);