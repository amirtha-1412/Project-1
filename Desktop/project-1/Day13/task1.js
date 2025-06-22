//1. To print the 3rd element
let fruits=["apple","orange","banana","pineapple"];
console.log(fruits[2]);

//2.Push value at the end
fruits.push("mango");
console.log(fruits);

//3. Remove element at front
fruits.shift();
console.log(fruits);

//4. Length of theb array
console.log(fruits.length);

//5.Loop to print array elements
fruits.forEach(num =>console.log(num));

//6.Reverse the element
console.log(fruits.reverse())

//7.Sum of the array
let numbers=[1,2,3,4,5,6,7,8,9];
let sum=0;
for(let i=0;i<numbers.length;i++){
    sum+=i;
}
console.log(sum);