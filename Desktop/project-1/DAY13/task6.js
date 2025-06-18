function bmical(weight,height){
    var bmi=weight/(height*height);
    return Math.round(bmi);
}
var bmi=bmical(60,1.7);
if (bmi<18.5){
    console.log(`Your BMI is  ${bmi},So you are Underweight.`);
}
else if(bmi>=18.5 && bmi<=24.9){
    console.log(`Your BMI is ${bmi},So you are Normal.`);
}
else{
    console.log(`Your BMI is ${bmi},So you are overweight.`);
}