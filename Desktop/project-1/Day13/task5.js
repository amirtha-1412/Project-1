function bmi(w,h) {
  return Math.round(w/(h*h)); 
}
var b=bmi(65,1.8);
console.log(b);