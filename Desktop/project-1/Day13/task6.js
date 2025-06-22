function bmi(w, h) {
    b = Math.round(w / (h * h));
    if (b < 18.5) {
        console.log(`Your BMI is ${b}  so your have a Underweight`);
    }
    else if (b >= 18.5 && b <= 24.9) {
        console.log(`Your BMI is ${b}  so your have a Normal weight`);
    }
    else {
        console.log(`Your BMI is ${b}  so your have a Over weight`);
    }
}
bmi(65, 1.8);
