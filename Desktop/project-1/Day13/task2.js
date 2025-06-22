//1.Concat of two array
let a1=[1,2,3,4,5,6];
let a2=[7,8,9];
let result=a1.concat(a2);
console.log(result);

//2.Splice function
let ans=a1.splice(1,2);
console.log(ans);
console.log(a1);

//3.Sort function
let a3=[9,8,7,6,5,4,3,2,1];
a3.sort();
console.log(a3);

//4.Specific item present or not
let a4=[1,7,2,3];
console.log(a4.includes(7));

//index of the element
let a5=[1,4,1,2];
console.log(a5.indexOf(4));